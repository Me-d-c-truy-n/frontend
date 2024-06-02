import MyHelmet from "../../components/MyHelmet";
import Slider from "../../components/Slider"
import TitleTabScroll from "../../components/TitleTabScroll";

const APP_NAME = 
  <b className="capitalize">{import.meta.env.VITE_REACT_APP_NAME}</b>;

const TermOfService = () => {

  return (
    <div className="font-sans flex flex-col text-black dark:text-white">
      <MyHelmet 
        title={'Điều Khoản Dịch Vụ'}
        description={'Web tổng hợp và đọc tiểu thuyết trực tuyến'}
      />
      <Slider/>
      <TitleTabScroll id="term_of_service" title="ĐIỀU KHOẢN DỊCH VỤ"/>
      <div className="flex flex-col gap-8 text-[1.05rem]">
        <p>Khi tham gia sử dụng dịch vụ cung cấp bởi {APP_NAME}, bạn phải đồng ý và tuân thủ các quy định sau.</p>
        <p>Quy định này áp dụng cho mọi đối tượng tham gia hoạt động tại website, không kể là khách, thành viên, tác giả, dịch giả, biên tập viên, quản trị viên, admin hay bất cứ thành viên nào khác.</p>
        <p>Quy định này gồm 2 bên:</p>
        <ul className="list-disc ps-6">
          <li>{APP_NAME} cung cấp dịch vụ trên internet.</li>
          <li>Khách hàng gọi tắt là KH, sử dụng dịch vụ của {APP_NAME} trên internet.</li>
        </ul>
        <p>Nội dung:</p>
        <ul className="list-decimal ps-6 text-justify flex flex-col gap-2">
          <li>Không được có những từ ngữ gay gắt, đả kích, xúc phạm, bêu xấu cá nhân và tổ chức trên {APP_NAME}.</li>
          <li>Không phát tán và truyền bá thông tin bất hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội.</li>
          <li>Không được gửi hoặc truyền bất kỳ thông tin hoặc phần mềm nào có chứa bất kỳ loại virus, trojan, bọ hay các thành phần nguy hại nào đến sự an toàn của hệ thống dịch vụ.</li>
          <li>Không tận dụng các bugs (lỗi) của chương trình nhằm phá hoại sự ổn định của {APP_NAME}.</li>
          <li>Nội dung các quy định trên có thể thay đổi mà không cần báo trước.</li>
        </ul>
        <i className="font-medium">Cập nhật lần cuối ngày 22/05/2024</i>
      </div>
    </div>
  )
}

export default TermOfService