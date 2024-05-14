interface Props {
  func: () => void;
  de?: boolean;
  children: React.ReactNode;
  count?: number;
}

const ButtonUtils = ({ de = true, func, children, count=0 }: Props) => {
  return (
    <div className={`dark:text-white relative outline-none shadow cursor-pointer rounded px-2 py-1 ${de?'border border-gray-700 hover:border-amber-700 hover:text-amber-700':'text-white bg-amber-700'}`} onClick={func}>
      <div className="flex gap-2 items-center capitalize">
        {children}
      </div>
      {
        count > 0 && 
        <div className="absolute rounded-full bg-amber-700 text-white -top-3 -right-3 flex items-center justify-center w-6 h-6"
        style={{fontSize: "11px"}}
        >
          {count}
        </div>
      }
    </div>
  )
}

export default ButtonUtils