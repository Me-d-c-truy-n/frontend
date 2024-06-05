import AxiosClient from "./axios"

export const ApiGetAllNovelOfAuthor = async (server: string, name: string, page: number) => {
  const res = await AxiosClient.get(`/${server}/tac-gia/${name}?page=${page}`)
  return res.data
}
