import moment from 'moment'
import listExport from '../constants/export.json';

export function convertDateToTime(date: string) {
  const convertDate = new Date(date);
  return moment(convertDate).fromNow()
        .replace('a few seconds', 'vài giây trước')
        .replace('minute ago', 'phút trước')
        .replace('minutes ago', 'phút trước')
        .replace('hour ago', 'giờ trước')
        .replace('hours ago', 'giờ trước')
        .replace('day ago', 'ngày trước')
        .replace('days ago', 'ngày trước')
        .replace('an', '1')
        .replace('a ', '1 ');  
}

export function convertDate(date: string) {
  const convertDate = new Date(date);
  return moment(convertDate).format('YYYY-MM-DD HH:mm:ss');
}

export function getImageOfExportFile(ep: string) {
  for (let i = 0; i < listExport.export.length; i++) {
    if (listExport.export[i].id === ep) return listExport.export[i].image;
  }
  return 'https://cdn-icons-png.flaticon.com/512/6301/6301689.png';
}

export function subSlugChapter(slug: string) {
  return slug
    .replace("chuong", "chương")
    .replace("hoi", "hồi")
    .replace("quyen", "quyển")
    .split("-").join(" ");
}