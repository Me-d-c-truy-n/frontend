export function convertDate(date: string) {
  const convertDate = new Date(date).toLocaleDateString("vi-VN");
  return convertDate;
}