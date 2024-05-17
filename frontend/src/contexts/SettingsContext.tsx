import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { ThemeContext } from "./ThemeContext";
import { THEME, THEME_DARK, THEME_LIGHT } from "../types/theme";
import { INITIAL_KEY, KEY } from "../types/key";

interface SettingsContextType {
  color: string;
  background: string;
  fontSize: string;
  fontStyle: string;
  leading: string;
  align: 'center' | 'left' | 'right' | 'justify';
  server: string;
  setColor: Dispatch<SetStateAction<string>>;
  setBackground: Dispatch<SetStateAction<string>>;
  setFontSize: Dispatch<SetStateAction<string>>;
  setFontStyle: Dispatch<SetStateAction<string>>;
  setLeading: Dispatch<SetStateAction<string>>;
  setAlign: Dispatch<SetStateAction<string>>;
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
    initialState: theme == THEME.LIGHT ? THEME_LIGHT.COLOR : THEME_DARK.COLOR,
  });
  const [background, setBackground] = useLocalStorageState({
    key: KEY.BACKGROUND + theme,
    initialState: theme == THEME.LIGHT ? THEME_LIGHT.BACKGROUND : THEME_DARK.BACKGROUND,
  });
  const [fontSize, setFontSize] = useLocalStorageState({
    key: KEY.FONTSIZE,
    initialState: INITIAL_KEY.FONTSIZE,
  });
  const [fontStyle, setFontStyle] = useLocalStorageState({
    key: KEY.FONTSTYLE,
    initialState: INITIAL_KEY.FONTSTYLE,
  });
  const [leading, setLeading] = useLocalStorageState({
    key: KEY.LEADING,
    initialState: INITIAL_KEY.LEADING,
  });
  const [align, setAlign] = useLocalStorageState({
    key: KEY.ALIGN,
    initialState: INITIAL_KEY.ALIGN,
  });
  const [server, setServer] = useLocalStorageState({
    key: KEY.SERVER,
    initialState: INITIAL_KEY.SERVER,
  });

  function resetSettings() {
    if (theme === THEME.LIGHT) {
      setBackground(THEME_LIGHT.BACKGROUND)
      setColor(THEME_LIGHT.COLOR);
    } else {
      setBackground(THEME_DARK.BACKGROUND)
      setColor(THEME_DARK.COLOR);
    }
    
    setFontSize(INITIAL_KEY.FONTSIZE);
    setFontStyle(INITIAL_KEY.FONTSTYLE);
    setLeading(INITIAL_KEY.LEADING);
    setAlign(INITIAL_KEY.ALIGN);
  }

  return (
    <SettingsContext.Provider
      value={{ 
        color, background, fontSize, fontStyle, leading, align, server,
        setColor, setBackground, setFontSize, setFontStyle, setServer, setLeading, setAlign,
        resetSettings 
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };