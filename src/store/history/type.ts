export interface IHistoryRoot {
  time: string;
  name: string;
  novelId: string;
  chapterId: string;
}

export interface IHistory {
  history: IHistoryRoot[];
}
