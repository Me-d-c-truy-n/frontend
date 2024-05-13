import AxiosClient from "./axios";

export const ApiGetDetailNovel = async(server: string, novelId: string) => {
  const res = await AxiosClient.get(`/${server}/${novelId}`);
  return res.data;
}