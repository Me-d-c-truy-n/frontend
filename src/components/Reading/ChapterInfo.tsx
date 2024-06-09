import { Link } from "react-router-dom";
import GuideText from "./GuideText";
import { HiUser } from "react-icons/hi2";
import { IChapter } from "../../types/novel";

const ChapterInfo = ({ chapter, server }: { chapter: IChapter; server: string }) => {
  return (
    <>
      <Link
        to={`/truyen/${chapter.novelId}`}
        className="font-bold text-gray-900 text-lg md:text-xl capitalize hover:text-amber-700 dark:text-stone-300 text-center"
      >
        {chapter.novelName}
      </Link>
      <Link
        to={`/tac-gia/${chapter.author.authorId || chapter.author.id}?server=${server}`}
        className="mt-1 text-gray-500 dark:text-gray-300 flex gap-1 items-center hover:underline"
      >
        <HiUser />
        {chapter.author.name}
      </Link>
      <GuideText />
    </>
  );
};

export default ChapterInfo;
