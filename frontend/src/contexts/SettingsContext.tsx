import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { ThemeContext } from "./ThemeContext";
import { THEME, THEME_DARK, THEME_LIGHT } from "../types/theme";
import { KEY } from "../types/key";

interface SettingsContextType {
  color: string;
  background: string;
  fontSize: string;
  fontStyle: string;
  server: string;
  setColor: Dispatch<SetStateAction<string>>;
  setBackground: Dispatch<SetStateAction<string>>;
  setFontSize: Dispatch<SetStateAction<string>>;
  setFontStyle: Dispatch<SetStateAction<string>>;
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
    key: KEY.COLOR + theme,
    initialState: theme == THEME.LIGHT?THEME_LIGHT.COLOR:THEME_DARK.COLOR,
  });
  const [background, setBackground] = useLocalStorageState({
    key: KEY.BACKGROUND + theme,
    initialState: theme == THEME.LIGHT?THEME_LIGHT.BACKGROUND:THEME_DARK.BACKGROUND,
  });
  const [fontSize, setFontSize] = useLocalStorageState({
    key: KEY.FONTSIZE,
    initialState: '25px',
  });
  const [fontStyle, setFontStyle] = useLocalStorageState({
    key: KEY.FONTSTYLE,
    initialState: 'Open sans',
  });
  const [server, setServer] = useLocalStorageState({
    key: KEY.SERVER,
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
    setFontStyle("Open sans");
  }

  return (
    <SettingsContext.Provider
      value={{ 
        color, background, fontSize, fontStyle, server,
        setColor, setBackground, setFontSize, setFontStyle, setServer,
        resetSettings 
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };