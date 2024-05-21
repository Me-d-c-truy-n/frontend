import { Align } from "../types/align";

export interface ISettings {
  fontSize: string;
  fontStyle: string;
  leading: string;
  align: Align;
}

export interface IServer {
  listServer: string[];
  server: string;
}

export interface IChapterOpen {
  isOpen: boolean;
}

export interface IHistoryRoot {
  time: string;
  name: string;
  novelId: string;
  chapterId: string;
}

export interface IHistory {
  history: IHistoryRoot[]
}