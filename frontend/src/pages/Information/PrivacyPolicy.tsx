import Slider from "../../components/Slider";
import TitleTabScroll from "../../components/TitleTabScroll";

const PrivacyPolicy = () => {
  return (
    <div className="font-sans flex flex-col text-black dark:text-white">
      <Slider/>
      <TitleTabScroll id="privacy_policy" title="CHÍNH SÁCH BẢO MẬT"/>
      <div className="flex flex-col gap-8 text-[1.05rem]">
        <p>Nền tảng đảm bảo các điều sau về tính riêng tư của người tham gia hoạt động tại tất cả các website trong hệ thống:</p>
        <ul className="list-decimal ps-6 text-justify flex flex-col gap-2">
          <li>Không tiết lộ địa chỉ email, hay các thông tin cần bảo mật khác cho bên thứ 3, trừ khi bạn vi phạm nội quy.</li>
          <li>Không tiết lộ vị trí của bạn cho bên thứ 3. Đồng thời chỉ sử dụng thông tin này để cải thiện chức năng của website. Mọi việc đều hoàn toàn tự động.</li>
          <li>Hệ thống lưu trữ các hoạt động mang tính công khai khi bạn tham gia hoạt động gồm: các hoạt động chung về truyện.</li>
          <li>Các thông tin truyện đánh dấu, lịch sử đọc truyện sẽ được lưu cục bộ tại trình duyệt của bạn, thông tin này sẽ mất khi bạn đọc truyện ở trình duyệt, thiết bị khác.</li>
        </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicy