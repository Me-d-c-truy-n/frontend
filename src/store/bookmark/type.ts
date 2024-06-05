export interface IBookmark {
  time: string
  novelId: string
  novelName: string
  chapterId?: string
  chapterName?: string
}

export interface IBookmarkRoot {
  bookmark: IBookmark[]
}
