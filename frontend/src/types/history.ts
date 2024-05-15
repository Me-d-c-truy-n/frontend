export interface IHistoryRoot {
  time: string;
  name: string;
  novelId: string;
  chapterId: number;
  totalChapter: number;
}

export interface IReaded {
  novelId: string;
  chapterId: number[];
}