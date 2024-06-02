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
    <div className="border-b dark:dark:border-b-gray-700 cursor-pointer py-3"
      onClick={handleNavigate}
    >
      <div 
      className={`hover:underline font-medium md:text-lg text-base ${isReaded?'text-gray-500':'text-amber-700'} `}>
        {chapter.name}
      </div>
      <p className="text-sm text-gray-400">{chapter.time}</p>
    </div>
  )
}

export default ChapterRow