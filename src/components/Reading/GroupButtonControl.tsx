import { Dispatch, SetStateAction } from "react";
import ButtonBookmark from "../Button/ButtonBookmark";
import ButtonUtils from "../Button/ButtonUtils";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { IChapter } from "../../types/novel";

interface Props {
  setOpenSettingPopup: Dispatch<SetStateAction<boolean>>;
  setOpenChapterPopup: Dispatch<SetStateAction<boolean>>;
  chapter: IChapter;
}

const GroupButtonControl = (props: Props) => {
  return (
    <div className="mt-6 flex md:gap-5 gap-3 mb-4 flex-wrap justify-center">
      <ButtonUtils func={() => props.setOpenSettingPopup(true)}>
        <IoSettingsOutline />
        Cấu hình
      </ButtonUtils>

      <ButtonUtils func={() => props.setOpenChapterPopup(true)}>
        <MdOutlineFormatListBulleted />
        Mục lục
      </ButtonUtils>

      <ButtonBookmark
        novelId={props.chapter.novelId}
        novelName={props.chapter.novelName}
        chapterId={props.chapter.chapterId}
        chapterName={props.chapter.name}
        time={new Date().toString()}
      />
    </div>
  );
};

export default GroupButtonControl;
