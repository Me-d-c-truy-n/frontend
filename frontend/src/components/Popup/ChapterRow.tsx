import { useNavigate } from "react-router-dom"
import { IChapterRoot } from "../../types/novel"

interface Props {
  chapter: IChapterRoot;
  close: ()=>void;
  isReaded?: boolean;
}

const ChapterRow = ({ chapter, close, isReaded = false }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/truyen/${chapter.novelId}/${chapter.chapterId}`)
    close();
  }

  return (
    <div className="pb-5 border-b cursor-pointer"
      onClick={handleNavigate}
    >
      <div 
      className={`font-medium text-lg ${isReaded?'text-slate-400':'text-amber-700'} `}>
        {chapter.name}
      </div>
      <p className="text-sm text-gray-400">{chapter.time}</p>
    </div>
  )
}

export default ChapterRow