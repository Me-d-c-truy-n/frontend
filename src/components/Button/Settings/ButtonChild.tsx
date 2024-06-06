interface Props {
  children: React.ReactNode;
  func: () => void;
}

const ButtonChild = ({ children, func }: Props) => {
  return (
    <button
      className="notranslate bg-black/10 dark:bg-black/50 !w-8 !h-8 rounded-full text-white flex justify-center items-center hover:bg-black/20 dark:hover:bg-slate-900/40"
      onClick={func}
    >
      {children}
    </button>
  );
};

export default ButtonChild;
