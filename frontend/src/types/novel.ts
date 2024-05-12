import { IAuthorRoot } from "./author";
import { ICategory } from "./category";

export interface INovelRoot {
  novelId: number;
  image: string;
  name: string;
  total: number;
  category: ICategory[];
  author: IAuthorRoot;
  description: string;
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