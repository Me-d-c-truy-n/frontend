import Skeleton from "react-loading-skeleton"
import ButtonClose from "../Button/ButtonClose"

const ListChapterSkeleton = ({ name, close }: {name: string, close: () => void}) => {
  return (
    <div className="flex flex-col h-full">
      <div className='flex justify-between items-center border-b dark:border-b-gray-700 pb-3 shadow-sm px-2'>
        <h1 className='text-xl font-bold dark:text-white'>{name}</h1>
        <ButtonClose close={close}/>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-2 md:grid-cols-2 overflow-y-hidden md:px-4 px-2 pt-2">
        {
          [...Array(16)].map((_, idx)=>
            <Skeleton key={idx} className="h-10"/>
          )
        }
      </div>
    </div>
  )
}

export default ListChapterSkeleton