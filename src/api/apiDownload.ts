import AxiosClient from "./axios"

export const ApiDownloadChapter = async (server: string, file: string, novelId: string, chapterId: string) => {
  const res = await AxiosClient.get(`/${server}/tai-truyen/${file}/${novelId}/${chapterId}`)
  return res.data
}
