import { useState } from 'react'
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const AnimatedTooltip = ({
  items
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
    url?: string
  }[]
}) => {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  function handleClick(url: string | undefined) {
    if (url) navigate(url)
  }

  return (
    <>
      {items.map((item) => (
        <div
          className={`-mr-4 relative group ${item.url && 'cursor-pointer'}`}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(item.url)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2'
              >
                <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px ' />
                <div className='absolute left-10 w-[42%] z-30 -bottom-px bg-gradient-to-r from-transparent via-amber-600 to-transparent h-[2px]' />
                <div className='font-bold text-white relative z-30 text-base'>{item.name}</div>
                <div className='text-white text-xs'>{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className='object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-110 group-hover:z-30 dark:border-white  border-slate-300 relative transition duration-500 dark:bg-black bg-white'
          />
        </div>
      ))}
    </>
  )
}
