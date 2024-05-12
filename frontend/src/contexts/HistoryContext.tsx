import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { IHistoryRoot } from "../types/history";

interface HistoryContextType {
  novels: IHistoryRoot[];
  setNovels: Dispatch<SetStateAction<IHistoryRoot[]>>;
  updateNovelReaded: (novel: IHistoryRoot) => void;
  reomveNovelReaded: (novelId: number) => void;
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

  function updateNovelReaded(novel: IHistoryRoot){
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novel.novelId !== nov.novelId)

    setNovels([novel, ...filterNovel])
  }

  function reomveNovelReaded(novelId: number) {
    const filterNovel = novels.filter((nov: IHistoryRoot)=>novelId !== nov.novelId)

    setNovels([...filterNovel])
  }

  return (
    <HistoryContext.Provider
      value={{ novels, setNovels, updateNovelReaded, reomveNovelReaded }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryContext, HistoryProvider };