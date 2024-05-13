import { INovelRoot } from "./novel";

export enum STATUS {
  SUCCESS = "success",
  ERROR = "error",
}

export interface IResponse {
  status: STATUS;
  message: string;
  totalPage: number;
  currentPage: number;
  searchValue: string;
  data: INovelRoot;
}