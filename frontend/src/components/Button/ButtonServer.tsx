import { Dispatch, SetStateAction } from 'react'
import { DraggableProvided } from '@hello-pangea/dnd'
import { FaServer } from 'react-icons/fa'
import LoadingCircle from '../Loading/LoadingCircle'
import { useMutation } from '@tanstack/react-query'
import { CheckServerChapter } from './KanbanSelectServer'
import { IResponse } from '../../types/response'
import { IChapter } from '../../types/novel'
import { ApiGetOneChapter } from '../../api/apiNovel'
import { toast } from 'react-toastify'

interface Props extends CheckServerChapter {
  successServer: string
  srv: string
  provided: DraggableProvided
  isCheking: string
  setIsChecking: Dispatch<SetStateAction<string>>
  // eslint-disable-next-line no-unused-vars
  func: (data: IResponse<IChapter>, server: string) => void
}

const ButtonServer = (props: Props) => {
  const checkChapterMutation = useMutation({
    mutationFn: async ({ novelId, chapterId }: CheckServerChapter) => {
      const data: IResponse<IChapter> = await ApiGetOneChapter(props.srv, novelId, chapterId)

      return data
    },
    onError: () => {
      props.setIsChecking('')
      toast.error(`Nguồn ${props.srv} không có`)
    },
    onSuccess: (data: IResponse<IChapter>) => {
      props.setIsChecking('')
      props.func(data, props.srv)
      toast.success(`Đã chuyển sang nguồn ${props.srv}`)
    },
    retry: 0
  })

  const handleClickChangeServer = () => {
    if (props.srv === props.successServer || props.isCheking) return

    props.setIsChecking(props.srv)
    checkChapterMutation.mutate({
      novelId: props.novelId,
      chapterId: props.chapterId
    })
  }

  return (
    <div
      onDoubleClick={handleClickChangeServer}
      {...props.provided.dragHandleProps}
      {...props.provided.draggableProps}
      ref={props.provided.innerRef}
      className={`p-1 shadow-xl outline-none text-center rounded ${props.srv === props.successServer ? 'animate-border bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-[length:400%_400%]' : 'text-gray-300 bg-sky-800'}`}
    >
      <div
        className={`h-full w-full flex p-[0.4rem] px-6 gap-2 items-center ${props.srv === props.successServer ? 'bg-gray-950' : 'bg-sky-600'}`}
      >
        {props.isCheking === props.srv ? <LoadingCircle /> : <FaServer />}
        {props.srv}
      </div>
    </div>
  )
}

export default ButtonServer
