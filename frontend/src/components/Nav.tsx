import { Dispatch, SetStateAction } from "react"

const Nav = ({ tabIndex, setTabIndex }: 
  {tabIndex: number, setTabIndex: Dispatch<SetStateAction<number>>}) => {

  return (
    <div className="bg-orange-100 flex text-sm md:text-md">
      <button 
        className={`w-1/2 md:w-fit uppercase p-2 md:p-4 ${tabIndex===1&&"text-white bg-amber-600"} border-r border-white`}
        onClick={() => setTabIndex(1)}
      >
          truyện đang đọc
      </button>
      <button 
        className={`w-1/2 md:w-fit uppercase p-2 md:p-4 ${tabIndex===2&&"text-white bg-amber-600"} border-r border-white`}
        onClick={() => setTabIndex(2)}
      >
        truyện đánh dấu
      </button>
    </div>
  )
}

export default Nav