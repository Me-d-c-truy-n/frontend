export interface IHistoryRoot {
  time: string;
  name: string;
  novelId: string;
  chapterId: string;
}

export interface IReaded {
  novelId: string;
  chapterId: string[];
}

export interface IReadedRoot {
  novelId: string;
  chapterId: string;
}