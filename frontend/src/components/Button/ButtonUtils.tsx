interface Props {
  func: () => void;
  de?: boolean;
  children: React.ReactNode;
}

const ButtonUtils = ({ de = true, func, children }: Props) => {
  return (
    <div className={`outline-none shadow cursor-pointer rounded px-2 py-1 ${de?'border border-gray-700 hover:border-amber-700 hover:text-amber-700':'text-white bg-amber-700'}`} onClick={func}>
      <div className="flex gap-2 items-center capitalize">
        {children}
      </div>
    </div>
  )
}

export default ButtonUtils