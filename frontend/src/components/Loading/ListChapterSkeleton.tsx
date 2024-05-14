import Skeleton from "react-loading-skeleton"

const ListChapterSkeleton = ({ name }: {name: string}) => {
  return (
    <div>
      <div className='flex justify-between items-center mb-10 border-b pb-6'>
        <h1 className='text-xl font-bold'>{name}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((idx)=>
            <Skeleton key={idx} className="h-8"/>
          )
        }
      </div>
    </div>
  )
}

export default ListChapterSkeleton