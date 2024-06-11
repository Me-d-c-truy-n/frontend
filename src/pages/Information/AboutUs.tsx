import Slider from "../../components/Slider";
import admin_01 from "../../assets/images/admin/admin_01.jpg";
import admin_02 from "../../assets/images/admin/admin_02.jpg";
import admin_03 from "../../assets/images/admin/admin_03.jpg";
import admin_04 from "../../assets/images/admin/admin_04.jpg";
import TitleTabScroll from "../../components/TitleTabScroll";
import MyHelmet from "../../components/MyHelmet";
import UserCard from "../../components/UserCard";
import AdminInformation from "../../constants/admin.json";

const AboutUs = () => {
  function getImageAdmin(index: number) {
    switch (index) {
      case 0:
        return admin_01;
      case 1:
        return admin_02;
      case 2:
        return admin_03;
      default:
        return admin_04;
    }
  }

  return (
    <div className="font-sans flex flex-col text-black dark:text-white">
      <MyHelmet title={"Nhóm Phát Triển"} description={"Web tổng hợp và đọc tiểu thuyết trực tuyến"} />
      <Slider />
      <TitleTabScroll id="about_us" title="NHÓM PHÁT TRIỂN" />
      <div className="flex justify-center items-center text-center">
        <h1 className="text-decoration md:text-5xl text-3xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter dark:before:bg-stone-950 before:bg-white mb-5 font-black pb-1">
          Software Design&nbsp;
        </h1>
      </div>

      <div className="flex flex-col gap-2 text-lg md:mt-6 mt-2">
        {AdminInformation["admin"].map((admin, idx) => (
          <UserCard
            key={admin.name}
            name={admin.name}
            imageURL={getImageAdmin(idx)}
            githubUrl={admin.githubUrl}
            facebookUrl={admin.facebookUrl}
            border={admin.border}
            shadow={admin.shadow}
            color_1={admin.color_1}
            color_2={admin.color_2}
            hover_color_2={admin.hover_color_2}
            isEnd={idx % 2 == 1}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
