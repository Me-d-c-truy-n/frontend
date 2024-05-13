export enum STATUS {
  SUCCESS = "success",
  ERROR = "error",
}

export interface IResponse<T> {
  status: STATUS;
  message: string;
  totalPage: number;
  currentPage: number;
  searchValue: string;
  data: T;
}