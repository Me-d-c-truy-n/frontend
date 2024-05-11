import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface SettingsContextType {
  color: string;
  background: string;
  fontSize: string;
  setColor: Dispatch<SetStateAction<string>>;
  setBackground: Dispatch<SetStateAction<string>>;
  setFontSize: Dispatch<SetStateAction<string>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: React.FC<SettingsProviderProps> = ({children}) =>{
  const [color, setColor] = useLocalStorageState({
    key: 'color',
    initialState: '#000000',
  });
  const [background, setBackground] = useLocalStorageState({
    key: 'background',
    initialState: '#f8f8e3',
  });
  const [fontSize, setFontSize] = useLocalStorageState({
    key: 'fontSize',
    initialState: '25px',
  });

  return (
    <SettingsContext.Provider
      value={{ color, background, fontSize, setColor, setBackground, setFontSize }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };