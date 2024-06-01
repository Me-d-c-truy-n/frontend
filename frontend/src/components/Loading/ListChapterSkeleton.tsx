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
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((idx)=>
            <Skeleton key={idx} className="h-10"/>
          )
        }
      </div>
    </div>
  )
}

export default ListChapterSkeleton