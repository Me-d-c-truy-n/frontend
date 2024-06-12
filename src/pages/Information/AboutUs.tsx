import Slider from "../../components/Slider";
import admin_01 from "../../assets/images/admin/admin_01.jpg";
import admin_02 from "../../assets/images/admin/admin_02.jpg";
import admin_03 from "../../assets/images/admin/admin_03.jpg";
import admin_04 from "../../assets/images/admin/admin_04.jpg";
import TitleTabScroll from "../../components/TitleTabScroll";
import MyHelmet from "../../components/MyHelmet";
import UserCard from "../../components/UserCard";

const AboutUs = () => {
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
        <UserCard
          name="Nguyễn Nhật Hào"
          imageURL={admin_01}
          githubUrl="https://github.com/nxhawk"
          facebookUrl="https://www.facebook.com/"
          border="border-sky-600"
          shadow="shadow-sky-600/100"
          color_1="text-sky-700"
          color_2="text-sky-500"
          hover_color_2="hover:text-sky-500"
          isEnd={false}
        />
        <UserCard
          name="Tô Phương Hiếu"
          imageURL={admin_02}
          githubUrl="https://github.com/phuonghieuto"
          facebookUrl="https://www.facebook.com/"
          border="border-red-600"
          shadow="shadow-red-600/100"
          color_1="text-red-700"
          color_2="text-red-500"
          hover_color_2="hover:text-red-500"
          isEnd={true}
        />
        <UserCard
          name="Trương Văn Hoài"
          imageURL={admin_03}
          githubUrl="https://github.com/hcdman"
          facebookUrl="https://www.facebook.com/"
          border="border-indigo-600"
          shadow="shadow-indigo-600/100"
          color_1="text-indigo-700"
          color_2="text-indigo-500"
          hover_color_2="hover:text-indigo-500"
          isEnd={false}
        />
        <UserCard
          name="Lê Minh Hoàng"
          imageURL={admin_04}
          githubUrl="https://github.com/mihoag"
          facebookUrl="https://www.facebook.com/"
          border="border-green-600"
          shadow="shadow-green-600/100"
          color_1="text-green-700"
          color_2="text-green-500"
          hover_color_2="hover:text-green-500"
          isEnd={true}
        />
      </div>
    </div>
  );
};

export default AboutUs;
