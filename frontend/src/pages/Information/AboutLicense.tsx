import Slider from "../../components/Slider"
import TitleTabScroll from "../../components/TitleTabScroll";

const AboutLicense = () => {
  return (
    <div className="font-sans flex flex-col text-black dark:text-white">
      <Slider/>
      <TitleTabScroll id="about_license" title="VỀ BẢN QUYỀN"/>
      <div className="flex flex-col gap-8 text-[1.05rem]">
        <ul className="list-decimal ps-6 text-justify flex flex-col gap-2">
          <li>Nền tảng và các website trong hệ thống luôn ý thức rõ ràng về việc tôn trọng bản quyền của các tác giả, tác phẩm, các sản phẩm trí tuệ.</li>
          <li>Website là một nền tảng mở, nguồn truyện được lấy từ nhiều trang truyện khác nhau.</li>
          <li>Nền tảng luôn cố gắng đảm bảo rằng tất cả nội dung trong hệ thống đều hợp pháp, nhưng chúng tôi không cam kết chắc chắn rằng có thể kiểm soát mọi thông tin trên ứng dụng.</li>
          <li>Nền tảng không đại diện cho nhóm dịch, người dịch là thành viên trên các website hệ thống.</li>
          <li>Nền tảng không có trách nhiệm truy cứu, kiện tụng và phân giải đối với các tác phẩm không do nền tảng sở hữu bản quyền.</li>
        </ul>
        <i className="text-lg">Tất cả các vấn đề liên quan tới bản quyền, vui lòng liên hệ trực tiếp qua email <span className="font-black">contact@truyen.onl</span></i>
      </div>
    </div>
  )
}

export default AboutLicense