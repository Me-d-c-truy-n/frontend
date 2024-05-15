import { ReactNode, createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { THEME } from "../types/theme";
import { KEY } from "../types/key";

interface ThemeContextType {
  theme: THEME;
  changeTheme: (newTheme: THEME) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) =>{
  const [theme, setTheme] = useLocalStorageState({
    key: KEY.THEME,
    initialState: THEME.LIGHT,
  });

  function changeTheme(newTheme: THEME) {
    setTheme(newTheme);
  }

  useEffect(() =>{
    if (theme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK);
    } else {
      document.documentElement.classList.remove(THEME.DARK);
    }
  },[theme])

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };