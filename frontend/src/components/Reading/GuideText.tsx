import { FaInfoCircle } from 'react-icons/fa'

const GuideText = () => {
  return (
    <div>
      <i className='text-base hidden md:flex mt-1 font-semibold gap-1 text-sky-500 items-center justify-center'>
        <FaInfoCircle />
        Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chương
      </i>
      <i className='md:text-base w-full flex flex-wrap font-semibold text-rose-500 items-center justify-center text-sm'>
        <b>Kéo thả</b>&nbsp;hoặc&nbsp;<b>nháy đúp chuột</b>&nbsp;để thay đổi nguồn truyện
      </i>
    </div>
  )
}

export default GuideText
