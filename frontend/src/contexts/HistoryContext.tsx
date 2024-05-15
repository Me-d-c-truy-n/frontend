import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { IHistoryRoot, IReaded, IReadedRoot } from "../types/history";
import { KEY } from "../types/key";

interface HistoryContextType {
  readed: IReaded[];
  novels: IHistoryRoot[];
  setNovels: Dispatch<SetStateAction<IHistoryRoot[]>>;
  addNovelReaded: (novel: IReadedRoot) => void;
  updateNovelReaded: (novel: IHistoryRoot) => void;
  removeNovelReaded: (novelId: string) => void;
  getListChapterReaded: (novelId: string) => number[];
  getChapterJustReaded: (novelId: string) => number;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

const HistoryProvider: React.FC<HistoryProviderProps> = ({children}) =>{
  const [novels, setNovels] = useLocalStorageState({
    key: KEY.HISTORY,
    initialState: [],
  });

  const [readed, setReaded] = useLocalStorageState({
    key: KEY.READED,
    initialState: [],
  });

  function addNovelReaded(novel: IReadedRoot){
    const filterUnReaded = readed.filter((read: IReaded)=>
      read.novelId !== novel.novelId);
    const filterReaded = readed.filter((read: IReaded)=>
      read.novelId === novel.novelId);

    if (filterReaded.length <= 0) {
      const newReaded: IReaded = {
        novelId: novel.novelId,
        chapterId: [novel.chapterId]
      };

      setReaded([newReaded, ...filterUnReaded]);
    } else {
      const listChapter = 
        filterReaded[0].chapterId.filter((chapter: number) => chapter !== novel.chapterId);

      const newReaded: IReaded = {
        novelId: novel.novelId,
        chapterId: [...listChapter, novel.chapterId]
      };

      setReaded([newReaded, ...filterUnReaded]);
    }
  }

  function updateNovelReaded(novel: IHistoryRoot){
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novel.novelId !== nov.novelId)

    setNovels([novel, ...filterNovel])
  }

  function removeNovelReaded(novelId: string) {
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novelId !== nov.novelId)

    setNovels([...filterNovel])
  }

  function getListChapterReaded(novelId: string) {
    const filterReaded = 
      readed.filter((read: IReaded) => read.novelId === novelId);
    
    return filterReaded[0]?.chapterId || [];
  }

  function getChapterJustReaded(novelId: string) {
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novelId === nov.novelId);

    if (filterNovel.length <= 0) return 0;
    return filterNovel[0].chapterId;
  }

  return (
    <HistoryContext.Provider
      value={{ 
        novels, setNovels, readed, 
        addNovelReaded, updateNovelReaded, removeNovelReaded, getListChapterReaded, getChapterJustReaded
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryContext, HistoryProvider };