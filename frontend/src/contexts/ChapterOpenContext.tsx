import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ChapterOpenContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ChapterOpenContext = createContext<ChapterOpenContextType | undefined>(undefined);

interface ChapterOpenProviderProps {
  children: ReactNode;
}

const ChapterOpenProvider: React.FC<ChapterOpenProviderProps> = ({children}) =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChapterOpenContext.Provider
      value={{ isOpen, setIsOpen }}
    >
      {children}
    </ChapterOpenContext.Provider>
  );
}

export { ChapterOpenContext, ChapterOpenProvider };