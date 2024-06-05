import { useState } from "react"
import { easeInOutCubic } from "../../utils/helpers"

const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)

  const scrollToTop = () => {
    try {
      const targetPosition = 0
      const startPosition = window.pageYOffset || document.documentElement.scrollTop

      if (startPosition > 1500) {
        const distance = targetPosition - startPosition
        const duration = 2000
        let start: number | null = null

        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = timestamp - start
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
          if (progress < duration) window.requestAnimationFrame(step)
        }

        window.requestAnimationFrame(step)
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    } catch (error) {
      console.log(error)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    setLastScrollTop(0)
    setVisible(false)
  }

  const toggleVisible = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop

    if (scrolled < lastScrollTop && scrolled >= 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }

    setLastScrollTop(scrolled <= 0 ? 0 : scrolled)
  }

  window.addEventListener("scroll", toggleVisible)

  return (
    <button
      className={`${!visible && "hidden"} shadow-xl font-black fixed flex items-center justify-center text-2xl text-white bottom-8 md:right-8 right-2 rounded-full w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  )
}

export default ScrollButton
