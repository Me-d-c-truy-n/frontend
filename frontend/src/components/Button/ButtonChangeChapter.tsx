interface Props {
  children: React.ReactNode;
  func: () => void;
}

const ButtonChangeChapter = ({ children, func }: Props) => {
  return (
    <button className="shadow flex flex-col justify-center items-center bg-yellow-200 hover:bg-yellow-300 text-slate-800 hover:text-slate-900
    dark:bg-slate-700 dark:hover:bg-slate-900 dark:text-slate-100 dark:hover:text-slate-200 w-14 rounded px-10"
    onClick={func}
    >
      {children}
    </button>
  )
}

export default ButtonChangeChapter