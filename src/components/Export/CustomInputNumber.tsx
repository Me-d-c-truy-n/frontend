interface Props {
  placeholder: string;
  value: number | "";
  // eslint-disable-next-line no-unused-vars
  setValue: (number: string) => void;
}

const preventMinus = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.code === "Minus" || e.code === "Equal") {
    e.preventDefault();
  }
};

const CustomInputNumber = ({ placeholder, value, setValue }: Props) => {
  return (
    <div className="flex">
      <label
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className=" border-r-0 flex-shrink-0 z-10 inline-flex items-center p-2.5 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-slate-950 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700"
        htmlFor="numberChapters"
      >
        Số chương
      </label>
      <input
        type="number"
        id="numberChapters"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        min={0}
        onKeyPress={preventMinus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default CustomInputNumber;
