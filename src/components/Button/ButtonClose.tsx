import { GrClose } from "react-icons/gr"

const ButtonClose = ({ close }: { close: () => void }) => {
  return (
    <GrClose
      className="md:w-1/12 w-2/12 text-xl cursor-pointer text-gray-500 hover:text-black dark:hover:text-slate-100"
      onClick={close}
    />
  )
}

export default ButtonClose
