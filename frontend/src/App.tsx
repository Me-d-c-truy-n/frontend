import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import router from './routers/router';
import { useContext, useEffect } from 'react';
import { ChapterOpenContext } from './contexts/ChapterOpenContext';
import { SettingsContext } from './contexts/SettingsContext';

function App() {
  const { isOpen } = useContext(ChapterOpenContext)!;
  const { background } = useContext(SettingsContext)!;

  useEffect(()=>{
    document.body.style.backgroundColor = background;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen, background])
  
  return (
    <div className={`${isOpen?'':'bg-white dark:bg-stone-950 '}`}>
      <RouterProvider router={router}/>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
