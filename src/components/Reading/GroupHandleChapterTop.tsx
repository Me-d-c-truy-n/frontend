import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const GroupHandleChapterTop = ({
  handlePrevChapter,
  handleNextChapter,
  chapterName,
}: {
  handlePrevChapter: () => void;
  handleNextChapter: () => void;
  chapterName: string;
}) => {
  return (
    <div className="flex mt-2 items-center gap-4 text-sm md:text-base">
      <button
        onClick={handlePrevChapter}
        className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white focus:outline-none"
      >
        <GrPrevious />
      </button>
      <div className="text-gray-700 dark:text-stone-300 text-center">{chapterName}</div>
      <button
        onClick={handleNextChapter}
        className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white focus:outline-none"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default GroupHandleChapterTop;
