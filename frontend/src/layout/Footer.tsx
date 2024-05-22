import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="border-t-2 mt-5 p-5 pb-4">
      <div className="text-lg text-center text-gray-600">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được đóng góp nội dung từ các tác giả viết truyện và các dịch giả convert, dịch truyện, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>
      <div className='flex justify-center mt-2'>
        <img src={logo} alt='logo' width={90}/>
      </div>
      <div className='mb-3 text-center font-bold dark:text-white'>FIT@HCMUS - 2024 - <Link to='/thong-tin/nhom-phat-trien'>Bee Group</Link></div>
      <div className='flex justify-center mt-5 gap-6 text-gray-600'>
        <Link to='/thong-tin/nhom-phat-trien'>Nhóm phát triển</Link>
        <Link to='/thong-tin/dieu-khoan-dich-vu'>Điều khoản dịch vụ</Link>
        <Link to='/thong-tin/chinh-sach-bao-mat'>Chính sách bảo mật</Link>
        <Link to='/thong-tin/ve-ban-quyen'>Về bản quyền</Link>
      </div>
    </div>
  )
}

export default Footer