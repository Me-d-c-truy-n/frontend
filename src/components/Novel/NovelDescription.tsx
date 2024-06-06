import { useState } from "react";
import TitleTabFull from "../TitleTabFull";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const NovelDescription = ({ description }: { description: string }) => {
  const [isShowFull, setIsShowFull] = useState<boolean>(false);

  return (
    <div className="border rounded dark:border-slate-800">
      <TitleTabFull>GIỚI THIỆU</TitleTabFull>
      <p
        className={`${!isShowFull && "line-clamp-5"} px-2 pt-3 text-lg leading-10 text-gray-700 dark:text-white`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></p>
      <div className="md:p-3 p-2 mt-2">
        {isShowFull ? (
          <button
            className="font-bold md:text-lg w-full text-slate-700 dark:text-white border-4 py-1 rounded border-dashed hover:bg-slate-100 dark:hover:bg-stone-900 flex gap-2 items-center justify-center focus:outline-none"
            onClick={() => setIsShowFull(false)}
          >
            <IoIosArrowUp className="md:text-xl text-base" />
            Thu gọn
          </button>
        ) : (
          <button
            className="font-bold md:text-lg w-full text-slate-700 dark:text-white border-4 py-1 rounded border-dashed hover:bg-slate-100 dark:hover:bg-stone-900 flex gap-2 items-center justify-center focus:outline-none"
            onClick={() => setIsShowFull(true)}
          >
            <IoIosArrowDown className="md:text-xl text-base" />
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
};

export default NovelDescription;
