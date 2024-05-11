import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="border-t-2 mt-5 p-5 mb-2">
      <div className="text-lg text-center text-gray-600">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được đóng góp nội dung từ các tác giả viết truyện và các dịch giả convert, dịch truyện, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>
      <div className='flex justify-center mt-2'>
        <img src={logo} alt='logo' width={90}/>
      </div>
      <div className='flex justify-center mt-2 gap-6 text-gray-600'>
        <p>Điều khoản dịch vụ</p>
        <p>Chính sách bảo mật</p>
        <p>Về bản quyền</p>
        <p>Hướng dẫn sử dụng</p>
      </div>
    </div>
  )
}

export default Footer