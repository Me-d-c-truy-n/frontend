import { Link } from "react-router-dom";
import { IHistoryRoot } from "../../types/history"
import { IoCloseOutline } from "react-icons/io5";
import { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import { convertDateToTime } from "../../utils/helpers";

const StoryHistoryRow = ({ data, color }: {data: IHistoryRoot,color: boolean}) => {
  const { removeNovelReaded } = useContext(HistoryContext)!;
  
  return (
    <div className={`flex mb-2 text-slate-500 text-sm items-center gap-2 p-2 px-3 ${color&&'bg-slate-100 dark:bg-stone-900'}`}>
      <div className="w-1/12 truncate">{convertDateToTime(data.time)}</div>
      <Link to={`/truyen/${data.novelId}/${data.chapterId}`} className="w-8/12 text-base font-bold text-slate-700 truncate hover:text-amber-800">{data.name}</Link>
      <div className="w-2/12">Đã đọc: {data.chapterId}/{data.totalChapter}</div>
      <button className="justify-self-end border border-amber-600 text-amber-600 p-1 rounded">
        <IoCloseOutline className="text-base"
          onClick={() => removeNovelReaded(data.novelId)}
        />
      </button>
    </div>
  )
}

export default StoryHistoryRow