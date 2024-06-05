import ButtonUtils from "./ButtonUtils"
import { SiTicktick } from "react-icons/si"
import { FaRegBookmark } from "react-icons/fa"
import { toast } from "react-toastify"
import { IBookmark } from "../../store/bookmark/type"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../store"
import { updateBookmark } from "../../store/bookmark"
import { checkIsBookmark } from "../../store/bookmark/selector"

const ButtonBookmark = ({ novelId, novelName, chapterId, chapterName }: IBookmark) => {
  const dispatch = useDispatch<AppDispatch>()
  const isBookmarked = useSelector(checkIsBookmark({ novelId, novelName, chapterId, time: "" }))

  return (
    <ButtonUtils
      func={() => {
        dispatch(
          updateBookmark({
            time: new Date().toString(),
            novelId,
            novelName,
            chapterId,
            chapterName,
          })
        )
        if (isBookmarked) {
          if (chapterId) toast.success("Đã bỏ đánh dấu chương này")
          else toast.success("Đã bỏ đánh dấu truyện này")
        } else {
          if (chapterId) toast.success("Đã đánh dấu chương này")
          else toast.success("Đã đánh dấu truyện này")
        }
      }}
    >
      {isBookmarked ? <SiTicktick className="text-amber-500" /> : <FaRegBookmark />}
      Đánh dấu
    </ButtonUtils>
  )
}

export default ButtonBookmark
