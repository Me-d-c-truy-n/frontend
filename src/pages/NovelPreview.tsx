import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { INovelRoot } from '../types/novel'
import Slider from '../components/Slider'
import NovelInfor from '../components/Novel/NovelInfor'
import { useQuery } from '@tanstack/react-query'
import { ApiGetDetailNovel } from '../api/apiNovel'
import { IResponse } from '../types/response'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import TitleTabFull from '../components/TitleTabFull'
import NovelDescription from '../components/Novel/NovelDescription'
import MyHelmet from '../components/MyHelmet'

const NovelPreview = () => {
  const navigate = useNavigate()
  const [novel, setNovel] = useState<INovelRoot | null>(null)
  const { server, listServer } = useSelector((state: AppState) => state.server)
  const [indexServer, setIndexServer] = useState(0)

  const { novelId } = useParams()

  const { isFetching, isError } = useQuery({
    queryKey: ['preview', novelId, server, indexServer],
    queryFn: async () => {
      const data: IResponse<INovelRoot> = await ApiGetDetailNovel(listServer[indexServer], novelId || 'a')

      setNovel(data.data)

      return data
    },
    retry: 1
  })

  useEffect(() => {
    if (isError) {
      if (indexServer == listServer.length - 1) navigate('/notfound', { replace: true })
      else setIndexServer(indexServer + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])

  return (
    <div>
      <Slider isLoading={isFetching} />
      <NovelInfor novel={novel} isLoading={isFetching} server={listServer[indexServer]} />

      <div className='mb-5'>
        {isFetching || novel == null ? (
          <>
            <TitleTabFull>
              <Skeleton width={100} />
            </TitleTabFull>
            <Skeleton height={300} />
          </>
        ) : (
          <>
            <MyHelmet
              title={`${novel.name} - nguồn ${listServer[indexServer]}`}
              description={`Truyện của tác giả ${novel.author} - nguồn ${listServer[indexServer]}`}
            />
            <NovelDescription description={novel.description} />
          </>
        )}
      </div>
    </div>
  )
}

export default NovelPreview
