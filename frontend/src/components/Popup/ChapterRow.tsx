import { useNavigate } from "react-router-dom"
import { IChapterRoot } from "../../types/novel"

const ChapterRow = ({ chapter, close }: {chapter: IChapterRoot, close: ()=>void;}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/truyen/${chapter.novelId}/${chapter.chapterId}`)
    close();
  }
  return (
    <div className="pb-5 border-b cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="font-medium text-lg text-amber-700">{chapter.name}</div>
      <p className="text-sm text-gray-400">{chapter.time}</p>
    </div>
  )
}

export default ChapterRow