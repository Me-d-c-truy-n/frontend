import { IAuthorRoot } from "./author";

export interface INovelRoot {
  novelId: number;
  image: string;
  name: string;
  total: number;
  author: IAuthorRoot;
  description: string;
}

export interface IChapterRoot {
  novelId: number;
  chapterId: number;
  name: string;
  novelName: string;
  total: number;
  time: string;
}

export interface IChapter {
  novelId: number;
  chapterId: number;
  name: string;
  novelName: string;
  total: number;
  time: string;
  author: IAuthorRoot;
  content: string;
}