import { FiDownload } from "react-icons/fi";

const ButtonDownload = ({ handleDownload }: { handleDownload: () => void }) => {
  return (
    <div className='flex justify-center mt-6'>
      <button className='transition ease-in-out border py-2 px-4 rounded-lg gap-3 flex items-center justify-center border-black dark:border-white hover:text-white hover:border-transparent hover:bg-amber-700'
      onClick={handleDownload}
      >
        <FiDownload/>
        Tải truyện
      </button>
    </div>
  )
}

export default ButtonDownload