import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import router from './routers/router'
import { useContext, useEffect } from 'react'
import { SettingsContext } from './contexts/SettingsContext'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeContext } from './contexts/ThemeContext'
import { THEME } from './types/theme'
import ScrollButton from './components/Button/ScrollButton'
import { useSelector } from 'react-redux'
import { AppState } from './store'

function App() {
  const isOpen = useSelector((state: AppState) => state.chapterOpen.isOpen)

  const { theme } = useContext(ThemeContext)!
  const { background } = useContext(SettingsContext)!

  useEffect(() => {
    document.body.style.backgroundColor = background
  }, [isOpen, background])

  return (
    <div className={`${isOpen ? '' : 'bg-white dark:bg-stone-950'}`}>
      {theme === THEME.LIGHT ? (
        <SkeletonTheme baseColor='#c9c9c9' highlightColor='#a3a0a0'>
          <RouterProvider router={router} />
        </SkeletonTheme>
      ) : (
        <SkeletonTheme baseColor='#333333' highlightColor='#424242'>
          <RouterProvider router={router} />
        </SkeletonTheme>
      )}

      <ScrollButton />

      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme={theme}
        pauseOnFocusLoss={false}
        className='w-fit hidden md:block'
        limit={5}
      />
    </div>
  )
}

export default App
