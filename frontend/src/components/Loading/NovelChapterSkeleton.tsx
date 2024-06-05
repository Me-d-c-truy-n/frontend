import Slider from '../Slider'
import Skeleton from 'react-loading-skeleton'

const NovelChapterSkeleton = () => {
  return (
    <div>
      <Slider isLoading={true} />
      <div className='flex flex-col justify-center items-center mt-2'>
        <Skeleton count={2} width={200} />

        <div className='flex mt-6 items-center gap-4'>
          <Skeleton width={300} />
        </div>
      </div>
      <div className='leading-10 my-10'>
        <Skeleton height={400} />
      </div>
      <Slider isLoading={true} />
    </div>
  )
}

export default NovelChapterSkeleton
