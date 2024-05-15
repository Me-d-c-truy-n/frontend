import moment from 'moment'

export function convertDate(date: string) {
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