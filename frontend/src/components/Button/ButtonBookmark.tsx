import ButtonUtils from './ButtonUtils'
import { SiTicktick } from "react-icons/si";
import { FaRegBookmark } from "react-icons/fa";
import { IBookmark } from '../../types/bookmark';
import { useContext } from 'react';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import { toast } from 'react-toastify';

const ButtonBookmark = ({
    novelId,  novelName,  chapterId,  chapterName
  }: IBookmark) => {

  const { updateBookmark, checkIsBookmark } = useContext(BookmarkContext)!;

  return (
    <ButtonUtils func={()=>{
      updateBookmark({
        time: (new Date).toString(),  
        novelId,  
        novelName,  
        chapterId,  
        chapterName
      });
      if (checkIsBookmark({novelId, novelName, chapterId, time: ''})) {
        if (chapterId) toast.success('Đã bỏ đánh dấu chương này');
        else toast.success('Đã bỏ đánh dấu truyện này');
      } else {
        if (chapterId) toast.success('Đã đánh dấu chương này');
        else toast.success('Đã đánh dấu truyện này');
      }
    }}>
      {
        checkIsBookmark({novelId, novelName, chapterId, time: ''}) ?
          <SiTicktick className="text-amber-500"/>:
          <FaRegBookmark />
      }
      Đánh dấu
    </ButtonUtils>
  )
}

export default ButtonBookmark