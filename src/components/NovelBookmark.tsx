import { Link } from "react-router-dom"
import { convertDate } from "../utils/helpers"
import { IoCloseOutline } from "react-icons/io5"
import { IBookmark } from "../store/bookmark/type"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState } from "../store"
import { updateBookmark } from "../store/bookmark"

const NovelBookmark = () => {
  const dispatch = useDispatch<AppDispatch>()
  const bookmark = useSelector((state: AppState) => state.bookmark.bookmark)

  return (
    <div className="mt-2">
      {bookmark.length <= 0 ? (
        <div className="dark:text-white text-center text-lg">
          <i>Không có truyện nào</i>
        </div>
      ) : (
        bookmark.map((bm: IBookmark, idx: number) => (
          <div
            key={idx}
            className={`flex mb-2 text-slate-500 text-sm items-center gap-2 p-2 md:px-2 px-1 ${idx % 2 == 1 && "bg-slate-50 dark:bg-stone-900 border-b"}`}
          >
            <Link
              to={bm.chapterId ? `/truyen/${bm.novelId}/${bm.chapterId}` : `/truyen/${bm.novelId}/`}
              className="w-9/12"
            >
              <div className="text-black dark:text-white text-base font-medium">{bm.novelName}</div>
              <div className="mt-2 dark:text-gray-300">{bm.chapterName}</div>
            </Link>
            <div className="truncate hidden md:block text-xs text-gray-600 font-medium w-2/12 dark:text-slate-400">
              {convertDate(bm.time)}
            </div>
            <div className="flex-1 flex justify-end">
              <button className="mr-1 border border-amber-600 text-amber-600 p-1 rounded">
                <IoCloseOutline
                  className="text-base"
                  onClick={() =>
                    dispatch(
                      updateBookmark({
                        time: new Date().toString(),
                        novelId: bm.novelId,
                        novelName: bm.novelName,
                        chapterId: bm.chapterId,
                        chapterName: bm.chapterName,
                      })
                    )
                  }
                />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default NovelBookmark
