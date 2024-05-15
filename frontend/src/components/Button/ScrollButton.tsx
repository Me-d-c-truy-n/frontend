import { useState } from "react"

const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false) 
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
    setLastScrollTop(0);
    setVisible(false);
  }; 

  const toggleVisible = () => { 
    const scrolled = window.pageYOffset || document.documentElement.scrollTop; 
    
    if (scrolled < lastScrollTop && scrolled >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setLastScrollTop(scrolled <= 0 ? 0 : scrolled);
  }; 

  window.addEventListener('scroll', toggleVisible); 

  return (
    <button className={`${!visible&&'hidden'} shadow-xl font-black fixed flex items-center justify-center text-2xl text-white bottom-8 right-8 rounded-full w-10 h-10 bg-amber-700`}
    onClick={scrollToTop}
    >
      ↑
    </button>
  )
}

export default ScrollButton