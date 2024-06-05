import { GrNext } from 'react-icons/gr'

interface Props {
  more?: boolean
  func?: () => void
  children: React.ReactNode
}

const TitleTabFull = ({ more = false, func, children }: Props) => {
  return (
    <div className='w-full dark:text-white dark:bg-slate-700 bg-zinc-200 p-2 flex items-center justify-between'>
      <h1 className='uppercase font-mono text-lg'>{children}</h1>
      {more && (
        <div onClick={func} className='flex gap-2 items-center cursor-pointer'>
          <span>xem thêm</span>
          <GrNext className='text-xs' />
        </div>
      )}
    </div>
  )
}

export default TitleTabFull
