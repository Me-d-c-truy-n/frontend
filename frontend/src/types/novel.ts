import { IAuthorRoot } from "./author";

export interface INovelRoot {
  novelId: string;
  image: string;
  name: string;
  firstChapter: string;
  author: IAuthorRoot;
  description: string;
}

export interface IChapterRoot {
  novelId: string;
  chapterId: string;
  name: string;
  novelName: string;
  total: number;
  time: string;
}

export interface IChapter {
  novelId: string;
  chapterId: string;
  name: string;
  novelName: string;
  nextChapterId: string;
  preChapterId: string;
  time: string;
  author: IAuthorRoot;
  content: string;
}