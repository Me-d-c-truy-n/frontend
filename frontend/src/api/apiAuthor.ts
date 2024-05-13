import AxiosClient from "./axios";

export const ApiGetAllMyOrder = async() => {
  const res = await AxiosClient.get("/truyenfull");
  return res.data;
}