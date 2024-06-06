import AxiosClient from "./axios";

export const ApiGetAllServer = async () => {
  const res = await AxiosClient.get(`/server`);
  return res.data;
};

export const ApiGetAllExport = async () => {
  const res = await AxiosClient.get(`/file`);
  return res.data;
};
