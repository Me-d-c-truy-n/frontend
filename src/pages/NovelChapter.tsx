import { useContext, useEffect, useState } from "react"
import Slider from "../components/Slider"
import { Link, useNavigate, useParams } from "react-router-dom"
import { IChapter } from "../types/novel"

import ButtonUtils from "../components/Button/ButtonUtils"
import { SettingsContext } from "../contexts/SettingsContext"
import SettingPopup from "../components/Popup/SettingPopup"
import ChapterPopup from "../components/Popup/ChapterPopup"
import { IResponse } from "../types/response"
import { useQuery } from "@tanstack/react-query"
import { ApiGetOneChapter } from "../api/apiNovel"
import NovelChapterSkeleton from "../components/Loading/NovelChapterSkeleton"
import ButtonChangeChapter from "../components/Button/ButtonChangeChapter"

import { RiSkipLeftLine } from "react-icons/ri"
import { RiSkipRightLine } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineFormatListBulleted } from "react-icons/md"
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
import { HiUser } from "react-icons/hi2"

import ButtonBookmark from "../components/Button/ButtonBookmark"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState } from "../store"
import { updateNovelReaded } from "../store/history"
import { addNovelReaded } from "../store/readed"
import { setIsOpen } from "../store/chapterOpen"
import { toast } from "react-toastify"
import KanbanSelectServer from "../components/Button/KanbanSelectServer"
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut"
import GuideText from "../components/Reading/GuideText"
import MyHelmet from "../components/MyHelmet"
import { subSlugChapter } from "../utils/helpers"

const NovelChapter = () => {
  const navigate = useNavigate()
  const { novelId, chapterId } = useParams()
  const [chapter, setChapter] = useState<IChapter | null>(null)
  const [openSettingPopup, setOpenSettingPopup] = useState<boolean>(false)
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false)
  const [successServer, setSuccessServer] = useState<string>("")

  const { color, background } = useContext(SettingsContext)!

  const settings = useSelector((state: AppState) => state.settings)
  const { server, listServer } = useSelector((state: AppState) => state.server)
  const dispatch = useDispatch<AppDispatch>()
  const [indexServer, setIndexServer] = useState(0)
  const [flagListServer, setFlagListServer] = useState(listServer)

  function DoubleClickChangeServerSuccess(data: IResponse<IChapter>, server: string) {
    setChapter(data.data)
    setSuccessServer(server)
  }

  useEffect(() => {
    dispatch(setIsOpen(true))
    return () => {
      dispatch(setIsOpen(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isFetching, isError } = useQuery({
    queryKey: ["chapter", chapterId, novelId, server, indexServer, flagListServer],
    queryFn: async () => {
      console.log(`Call API ${listServer[indexServer]}/${novelId}/${chapterId}`)
      const data: IResponse<IChapter> = await ApiGetOneChapter(
        listServer[indexServer],
        novelId || "a",
        chapterId || "chuong-1"
      )

      setSuccessServer(listServer[indexServer])
      setChapter(data.data)

      return data
    },
    retry: 1,
  })

  useEffect(() => {
    if (chapter == null) return
    dispatch(
      updateNovelReaded({
        time: new Date().toString(),
        name: chapter.novelName,
        novelId: chapter.novelId,
        chapterId: chapter.chapterId,
      })
    )

    dispatch(
      addNovelReaded({
        novelId: chapter.novelId,
        chapterId: chapter.chapterId,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter])

  const handleNextChapter = () => {
    if (chapter == null || chapterId == null) return
    if (!chapter.nextChapterId || chapter.nextChapterId.length <= 0) {
      toast.error("Hiện tại đây đã là chương cuối", {
        toastId: "last-chapter",
      })
      return
    }
    toast.dismiss()
    navigate(`/truyen/${novelId}/${chapter.nextChapterId}`)
  }

  const handlePrevChapter = () => {
    if (chapter == null || chapterId == null) return
    if (!chapter.preChapterId || chapter.preChapterId.length <= 0) {
      toast.error("Đây đã là chương đầu tiên", { toastId: "first-chapter" })
      return
    }
    toast.dismiss()
    navigate(`/truyen/${novelId}/${chapter.preChapterId}`)
  }

  useEffect(() => {
    setFlagListServer(listServer)
    setIndexServer(0)
  }, [listServer])

  useEffect(() => {
    if (isError) {
      if (indexServer == listServer.length - 1) navigate("/notfound", { replace: true })
      else setIndexServer(indexServer + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])

  const _isLoading = chapter === null || isFetching || novelId == null || chapterId == undefined

  useKeyboardShortcut({
    isActive: !openChapterPopup && !openSettingPopup && !_isLoading,
    key: "ArrowLeft",
    onKeyPressed: handlePrevChapter,
  })

  useKeyboardShortcut({
    isActive: !openChapterPopup && !openSettingPopup && !_isLoading,
    key: "ArrowRight",
    onKeyPressed: handleNextChapter,
  })

  if (_isLoading) return <NovelChapterSkeleton />

  return (
    <div style={{ backgroundColor: background }}>
      {openSettingPopup && <SettingPopup close={() => setOpenSettingPopup(false)} />}
      {openChapterPopup && (
        <ChapterPopup
          close={() => setOpenChapterPopup(false)}
          novelId={novelId}
          name={chapter.novelName}
          server={successServer}
          chapterId={chapterId || "1"}
        />
      )}
      <MyHelmet
        title={`${chapter.novelName} - ${subSlugChapter(chapter.chapterId)} - nguồn ${successServer}`}
        description={`Truyện của tác giả ${chapter.author} - nguồn ${successServer}`}
      />
      <Slider />
      <div className="flex flex-col justify-center items-center mt-2">
        <Link
          to={`/truyen/${chapter.novelId}`}
          className="font-bold text-gray-900 text-lg md:text-xl capitalize hover:text-amber-700 dark:text-stone-300 text-center"
        >
          {chapter.novelName}
        </Link>
        <Link
          to={`/tac-gia/${chapter.author.authorId || chapter.author.id}?server=${successServer}`}
          className="mt-1 text-gray-500 dark:text-gray-300 flex gap-1 items-center hover:underline"
        >
          <HiUser />
          {chapter.author.name}
        </Link>
        <GuideText />
        <div className="flex mt-2 items-center gap-4 text-sm md:text-base">
          <button
            onClick={handlePrevChapter}
            className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white focus:outline-none"
          >
            <GrPrevious />
          </button>
          <div className="text-gray-700 dark:text-stone-300 text-center">{chapter.name}</div>
          <button
            onClick={handleNextChapter}
            className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white focus:outline-none"
          >
            <GrNext />
          </button>
        </div>

        <div className="mt-6 flex md:gap-5 gap-3 mb-4 flex-wrap justify-center">
          <ButtonUtils func={() => setOpenSettingPopup(true)}>
            <IoSettingsOutline />
            Cấu hình
          </ButtonUtils>

          <ButtonUtils func={() => setOpenChapterPopup(true)}>
            <MdOutlineFormatListBulleted />
            Mục lục
          </ButtonUtils>

          <ButtonBookmark
            novelId={chapter.novelId}
            novelName={chapter.novelName}
            chapterId={chapter.chapterId}
            chapterName={chapter.name}
            time={new Date().toString()}
          />
        </div>

        <KanbanSelectServer
          successServer={successServer}
          chapterId={chapterId}
          novelId={chapter.novelId}
          func={DoubleClickChangeServerSuccess}
        />
      </div>
      <div
        className="mt-8 mb-4 px-2"
        style={{
          fontSize: settings.fontSize,
          color: color,
          fontFamily: settings.fontStyle,
          lineHeight: settings.leading,
          textAlign: settings.align,
        }}
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      ></div>
      <Slider />

      <div className="mt-6 flex gap-14 items-center justify-center">
        {chapter.preChapterId && chapter.preChapterId.length >= 0 && (
          <ButtonChangeChapter func={handlePrevChapter}>
            <RiSkipLeftLine className="text-2xl" />
            TRƯỚC
          </ButtonChangeChapter>
        )}
        {chapter.nextChapterId && chapter.nextChapterId.length >= 0 && (
          <ButtonChangeChapter func={handleNextChapter}>
            <RiSkipRightLine className="text-2xl" />
            SAU
          </ButtonChangeChapter>
        )}
      </div>
    </div>
  )
}

export default NovelChapter
