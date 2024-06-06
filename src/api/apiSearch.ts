import AxiosClient from "./axios";

export const ApiSearch = async (server: string, key: string, page: number) => {
  const res = await AxiosClient.get(`/${server}/tim-kiem?search=${key}&key=${key}&page=${page}`);
  return res.data;
};
