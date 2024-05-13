import AxiosClient from "./axios";

export const ApiGetAllNovel = async(server: string, page: number) => {
  const res = await AxiosClient.get(`/${server}/ds-truyen?page=${page}`);
  return res.data;
}

export const ApiGetDetailNovel = async(server: string, novelId: string) => {
  const res = await AxiosClient.get(`/${server}/${novelId}`);
  return res.data;
}

export const ApiGetOneChapter = async(server: string, novelId: string, chapterId: string) => {
  const res = await AxiosClient.get(`/${server}/${novelId}/${chapterId}`);
  return res.data;
}

export const ApiGetAllChapter = async(server: string, novelId: string) => {
  const res = await AxiosClient.get(`/${server}/${novelId}/all`);
  return res.data;
}