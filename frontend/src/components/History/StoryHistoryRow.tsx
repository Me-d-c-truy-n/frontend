import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { convertDateToTime, subSlugChapter } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { removeNovelReaded } from "../../store/history";
import { IHistoryRoot } from "../../store/history/type";

const StoryHistoryRow = ({ data, color }: {data: IHistoryRoot,color: boolean}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`flex mb-2 text-slate-500 text-sm items-center gap-2 p-2 px-3 ${color&&'bg-slate-100 dark:bg-stone-900'}`}>
      <div className="w-1/12 truncate hidden md:block">{convertDateToTime(data.time)}</div>
      <Link to={`/truyen/${data.novelId}/${data.chapterId}`} className="w-8/12 text-base font-bold text-slate-700 dark:text-neutral-400 truncate hover:text-amber-800">{data.name}</Link>
      <div className="w-2/12">Đã đọc {subSlugChapter(data.chapterId)}</div>
      <button className="justify-self-end border border-amber-600 text-amber-600 p-1 rounded">
        <IoCloseOutline className="text-base"
          onClick={() => dispatch(removeNovelReaded(data.novelId))}
        />
      </button>
    </div>
  )
}

export default StoryHistoryRow