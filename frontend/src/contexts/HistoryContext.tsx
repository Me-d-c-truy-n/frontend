import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { IHistoryRoot, IReaded, IReadedRoot } from "../types/history";

interface HistoryContextType {
  readed: IReaded[];
  novels: IHistoryRoot[];
  setNovels: Dispatch<SetStateAction<IHistoryRoot[]>>;
  addNovelReaded: (novel: IReadedRoot) => void;
  updateNovelReaded: (novel: IHistoryRoot) => void;
  removeNovelReaded: (novelId: string) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

const HistoryProvider: React.FC<HistoryProviderProps> = ({children}) =>{
  const [novels, setNovels] = useLocalStorageState({
    key: 'history',
    initialState: [],
  });

  const [readed, setReaded] = useLocalStorageState({
    key: 'readed',
    initialState: [],
  });

  function addNovelReaded(novel: IReadedRoot){
    console.log(novel);
  }

  function updateNovelReaded(novel: IHistoryRoot){
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novel.novelId !== nov.novelId)

    setNovels([novel, ...filterNovel])
  }

  function removeNovelReaded(novelId: string) {
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novelId !== nov.novelId)

    setNovels([...filterNovel])
  }

  return (
    <HistoryContext.Provider
      value={{ 
        novels, setNovels, readed, 
        addNovelReaded, updateNovelReaded, removeNovelReaded 
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryContext, HistoryProvider };