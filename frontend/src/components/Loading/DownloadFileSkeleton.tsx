import logo from '../../assets/images/logo.png';
import Skeleton from "react-loading-skeleton"
import ButtonClose from '../Button/ButtonClose';

interface Props {
  close: ()=>void;
}

const DownloadFileSkeleton = ({ close }: Props) => {
  return (
    <div className="z-10 px-1 fixed left-0 top-0 w-full h-full flex justify-center items-center shadow-lg backdrop-blur-sm">
    <div className="shadow-2xl p-2 md:py-4 md:px-4 mx-auto border rounded-lg border-amber-600 bg-white dark:bg-black dark:text-white"
    >
      <div className='flex justify-between items-center mb-5'>
        <img src={logo} alt='logo' className='w-10'/>
        <h1 className='text-xl font-bold'>Tải truyện</h1>
        <ButtonClose close={close}/>
      </div>
      <div className='px-4'>
        <div className='flex gap-3 items-center justify-center flex-wrap'>
          <Skeleton width={100} height={120}/>
          <Skeleton width={100} height={120}/>
          <Skeleton width={100} height={120}/>
        </div>
        {/* <div className='mt-4 mx-auto'>
          <Skeleton count={2} height={40}/>
        </div> */}
        <div className='flex justify-center mt-2'>
          <Skeleton height={50} width={125}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DownloadFileSkeleton