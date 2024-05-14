import { GrClose } from "react-icons/gr"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const ListChapterSkeleton = ({ name, close }: {name: string, close: () => void}) => {
  return (
    <div>
      <div className='flex justify-between items-center mb-10 border-b pb-6'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <GrClose className='text-xl cursor-pointer text-gray-500 hover:text-black' onClick={close}/>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SkeletonTheme baseColor="#d6d4d4" highlightColor="#dfdcdc">
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((idx)=>
              <Skeleton key={idx} className="h-10"/>
            )
          }
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default ListChapterSkeleton