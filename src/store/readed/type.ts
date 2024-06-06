export interface IReaded {
  novelId: string;
  chapterId: string[];
}

export interface IReadedRoot {
  novelId: string;
  chapterId: string;
}

export interface IReadedData {
  readed: IReaded[];
}
