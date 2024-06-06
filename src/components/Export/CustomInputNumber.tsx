import { Dispatch, SetStateAction } from "react";

interface Props {
  placeholder: string;
  value: number | undefined;
  setValue: Dispatch<SetStateAction<number | undefined>>;
}

const CustomInputNumber = ({ placeholder, value, setValue }: Props) => {
  return (
    <input
      type="number"
      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(parseInt(e.target.value))}
      required
    />
  );
};

export default CustomInputNumber;
