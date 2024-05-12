import { GrClose } from "react-icons/gr";
import { IChapterRoot } from "../../types/novel";
import ChapterRow from "./ChapterRow";

interface Props {
  close: ()=>void;
  chapters: IChapterRoot[];
}

const ChapterPopup = ({ close, chapters }: Props) => {
  
  return (
    <div className="fixed left-0 mt-0 z-10 top-0 w-full h-screen bg-gray-400">
      <div className="shadow-2xl p-4 w-11/12 lg:w-8/12 mx-auto border rounded-lg border-amber-600 bg-amber-50 pb-10"
      >
        <div className='flex justify-between items-center mb-10 border-b pb-6'>
          <h1 className='text-xl font-bold'>{chapters[0].novelName}</h1>
          <GrClose className='text-xl cursor-pointer text-gray-500 hover:text-black' onClick={close}/>
        </div>

        <div className="grid grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2">
          {
            chapters.map(chapter => 
            <ChapterRow key={chapter.chapterId} chapter={chapter} close={close}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default ChapterPopup