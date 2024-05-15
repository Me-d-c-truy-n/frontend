import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { ThemeContext } from "./ThemeContext";
import { THEME, THEME_DARK, THEME_LIGHT } from "../types/theme";

interface SettingsContextType {
  color: string;
  background: string;
  fontSize: string;
  server: string;
  setColor: Dispatch<SetStateAction<string>>;
  setBackground: Dispatch<SetStateAction<string>>;
  setFontSize: Dispatch<SetStateAction<string>>;
  setServer: Dispatch<SetStateAction<string>>;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: React.FC<SettingsProviderProps> = ({children}) =>{
  const { theme } = useContext(ThemeContext)!;
  
  const [color, setColor] = useLocalStorageState({
    key: 'color-'+theme,
    initialState: theme == THEME.LIGHT?THEME_LIGHT.COLOR:THEME_DARK.COLOR,
  });
  const [background, setBackground] = useLocalStorageState({
    key: 'background-'+theme,
    initialState: theme == THEME.LIGHT?THEME_LIGHT.BACKGROUND:THEME_DARK.BACKGROUND,
  });
  const [fontSize, setFontSize] = useLocalStorageState({
    key: 'fontSize',
    initialState: '25px',
  });
  const [server, setServer] = useLocalStorageState({
    key: 'server',
    initialState: 'truyenfull',
  });



  function resetSettings() {
    if (theme === THEME.LIGHT) {
      setBackground(THEME_LIGHT.BACKGROUND)
      setColor(THEME_LIGHT.COLOR);
    } else {
      setBackground(THEME_DARK.BACKGROUND)
      setColor(THEME_DARK.COLOR);
    }
    
    setFontSize("25px");
  }

  return (
    <SettingsContext.Provider
      value={{ 
        color, background, fontSize, server,
        setColor, setBackground, setFontSize, setServer,
        resetSettings 
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };