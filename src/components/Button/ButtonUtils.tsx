interface Props {
  func: () => void;
  de?: boolean;
  children: React.ReactNode;
  count?: number;
  className?: string;
}

const ButtonUtils = ({ de = true, func, children, count = 0, className = "" }: Props) => {
  return (
    <div
      className={`dark:text-white relative outline-none shadow cursor-pointer rounded px-2 py-1 
    ${de ? "border border-gray-700 hover:border-amber-700 hover:text-amber-700" : "text-white bg-gradient-to-r from-yellow-500 to-orange-500 shadow"}
    ${className} flex text-sm md:text-base
    `}
      onClick={func}
    >
      <div className="flex gap-1 md:gap-2 items-center">{children}</div>
      {count > 0 && (
        <div
          className="absolute rounded-full bg-amber-700 text-white -top-3 -right-3 flex items-center justify-center w-6 h-6"
          style={{
            fontSize: "11px",
          }}
        >
          {count}
        </div>
      )}
    </div>
  );
};

export default ButtonUtils;
