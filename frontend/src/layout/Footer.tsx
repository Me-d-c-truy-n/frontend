import { Link } from 'react-router-dom';
import admin_01 from "../assets/images/admin/admin_01.jpg";
import admin_02 from "../assets/images/admin/admin_02.jpg";
import admin_03 from "../assets/images/admin/admin_03.jpg";
import admin_04 from "../assets/images/admin/admin_04.jpg";
import logo from "../assets/images/logo.png";
import { AnimatedTooltip } from '../components/ui/animated-tooltip';

const APP_NAME = 
  <span className="capitalize">{import.meta.env.VITE_REACT_APP_NAME}</span>;

  const people = [
    {
      id: 1,
      name: import.meta.env.VITE_REACT_APP_NAME,
      designation: "Group 04",
      image: logo,
      url: "/",
    },
    {
      id: 2,
      name: "Nguyễn Nhật Hào",
      designation: "Frontend Developer",
      image: admin_01,
    },
    {
      id: 3,
      name: "Tô Phương Hiếu",
      designation: "Backend Developer",
      image: admin_02,
    },
    {
      id: 4,
      name: "Trương Văn Hoài",
      designation: "Backend Developer",
      image: admin_03,
    },
    {
      id: 5,
      name: "Lê Minh Hoàng",
      designation: "Backend Developer",
      image: admin_04,
    },
  ];

const Footer = () => {
  return (
    <div className="border-t-2 mt-4 p-3 pb-4">
      <div className="md:text-lg text-base text-center text-gray-600">
        {APP_NAME} là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được đóng góp nội dung từ các tác giả viết truyện và các dịch giả convert, dịch truyện, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>
      <div className="flex flex-row items-center justify-center mt-4 mb-2 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className='-mr-4 mb-3 text-center font-bold dark:text-white'>FIT@HCMUS - 2024 - <Link to='/thong-tin/nhom-phat-trien' className='hover:underline'>Group 04</Link></div>
      <div className='text-center flex flex-col justify-center md:mt-5 mt-2 md:gap-6 gap-1 text-gray-600 md:flex-row items-center'>
        <Link to='/thong-tin/nhom-phat-trien' className='hover:underline'>Nhóm phát triển</Link>
        <Link to='/thong-tin/dieu-khoan-dich-vu' className='hover:underline'>Điều khoản dịch vụ</Link>
        <Link to='/thong-tin/chinh-sach-bao-mat' className='hover:underline'>Chính sách bảo mật</Link>
        <Link to='/thong-tin/ve-ban-quyen' className='hover:underline'>Về bản quyền</Link>
      </div>
    </div>
  )
}

export default Footer