import moment from 'moment'
import listExport from '../constants/export.json'
import listPerpage from '../constants/perpage.json'

export function convertDateToTime(date: string) {
  const convertDate = new Date(date)
  return moment(convertDate)
    .fromNow()
    .replace('a few seconds', 'vài giây trước')
    .replace('minute ago', 'phút trước')
    .replace('minutes ago', 'phút trước')
    .replace('hour ago', 'giờ trước')
    .replace('hours ago', 'giờ trước')
    .replace('day ago', 'ngày trước')
    .replace('days ago', 'ngày trước')
    .replace('an', '1')
    .replace('a', '1')
}

export function convertDate(date: string) {
  const convertDate = new Date(date)
  return moment(convertDate).format('YYYY-MM-DD HH:mm:ss')
}

export function getImageOfExportFile(ep: string) {
  for (let i = 0; i < listExport.export.length; i++) {
    if (listExport.export[i].id === ep.toLocaleLowerCase()) return listExport.export[i].image
  }
  return 'https://cdn-icons-png.flaticon.com/512/6301/6301689.png'
}

export function subSlugChapter(slug: string) {
  return slug
    .replace(/^\d+/, '')
    .replace('chuong', 'chương')
    .replace('hoi', 'hồi')
    .replace('quyen', 'quyển')
    .replace('tap', 'tập')
    .split('-')
    .join(' ')
}

export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}

export function getCurrentScrollByChapterId(server: string, chapterId: string, fullHeight: number) {
  let scroll = 0
  try {
    const chapter = parseInt(chapterId.replace(/^\d+/, '').replace('chuong-', '').split(' ').join(''))

    if (isNaN(chapter) || chapter <= 0) throw new Error()

    let perpage = 0
    listPerpage.perpage.map((srv) => {
      if (srv.name === server) return (perpage = srv.perpage)
    })

    let currentChapter = chapter % perpage
    if (currentChapter === 0) currentChapter = perpage
    currentChapter -= 2

    scroll = perpage <= 0 ? 0 : (fullHeight * currentChapter) / perpage
  } catch (error) {
    return 0
  }

  return scroll
}

export function getCurrentPageByChapterId(server: string, chapterId: string) {
  // check is simple chapter (only chapterId: chuong-[number])
  let page = 1
  try {
    const chapter = parseInt(chapterId.replace(/^\d+/, '').replace('chuong-', '').split(' ').join(''))

    if (isNaN(chapter) || chapter <= 0) throw new Error()

    let perpage = 0
    listPerpage.perpage.map((srv) => {
      if (srv.name === server) return (perpage = srv.perpage)
    })

    page = perpage === 0 ? 1 : Math.ceil(chapter / perpage)
  } catch (error) {
    return 1
  }

  return page <= 0 ? 1 : page
}
