import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react"
import { useLocalStorageState } from "../hooks/useLocalStorageState"
import { ThemeContext } from "./ThemeContext"
import { THEME, THEME_DARK, THEME_LIGHT } from "../types/theme"
import { KEY } from "../types/key"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { resetSettingsText } from "../store/settings"

interface SettingsContextType {
  color: string
  background: string
  setColor: Dispatch<SetStateAction<string>>
  setBackground: Dispatch<SetStateAction<string>>
  resetSettings: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

interface SettingsProviderProps {
  children: ReactNode
}

// eslint-disable-next-line react/prop-types
const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext)!
  const dispatch = useDispatch<AppDispatch>()

  const [color, setColor] = useLocalStorageState({
    key: KEY.COLOR + theme,
    initialState: theme == THEME.LIGHT ? THEME_LIGHT.COLOR : THEME_DARK.COLOR,
  })
  const [background, setBackground] = useLocalStorageState({
    key: KEY.BACKGROUND + theme,
    initialState: theme == THEME.LIGHT ? THEME_LIGHT.BACKGROUND : THEME_DARK.BACKGROUND,
  })

  function resetSettings() {
    if (theme === THEME.LIGHT) {
      setBackground(THEME_LIGHT.BACKGROUND)
      setColor(THEME_LIGHT.COLOR)
    } else {
      setBackground(THEME_DARK.BACKGROUND)
      setColor(THEME_DARK.COLOR)
    }

    dispatch(resetSettingsText())
  }

  return (
    <SettingsContext.Provider
      value={{
        color,
        background,
        setColor,
        setBackground,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsProvider }
