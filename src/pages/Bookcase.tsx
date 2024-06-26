import { useState } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import StoryJustRead from "../components/History/StoryJustRead";
import NovelBookmark from "../components/NovelBookmark";
import MyHelmet from "../components/MyHelmet";

const Bookcase = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <>
      <MyHelmet title={"Tủ truyện"} description={"Web tổng hợp và đọc tiểu thuyết trực tuyến"} />
      <Slider />
      <Nav tabIndex={tabIndex} setTabIndex={setTabIndex} />
      {tabIndex === 1 ? (
        <StoryJustRead isShowAll={true} />
      ) : (
        <div>
          <div className="text-sm md:text-base md:p-3 p-2 bg-gray-100 dark:bg-zinc-800 dark:text-white leading-6 text-justify">
            Chức năng đánh dấu dùng để lưu lại các truyện, chương mà bạn dự định sau này sẽ đọc hoặc cần tìm lại, do đó
            một truyện bạn có thể đánh dấu được nhiều chương. Đừng dùng chức năng đánh dấu để lưu tiến độ đọc truyện vì
            nó đã được tựu động lưu vào mục <b>Truyện đang đọc</b>
          </div>
          <NovelBookmark />
        </div>
      )}
    </>
  );
};

export default Bookcase;
