import ButtonChangeChapter from "../Button/ButtonChangeChapter";

import { RiSkipLeftLine } from "react-icons/ri";
import { RiSkipRightLine } from "react-icons/ri";

const GroupHandleChapterBottom = ({
  isShowPrevButton,
  isShowNextButton,
  handlePrevChapter,
  handleNextChapter,
}: {
  isShowPrevButton: boolean;
  isShowNextButton: boolean;
  handlePrevChapter: () => void;
  handleNextChapter: () => void;
}) => {
  return (
    <div className="mt-6 flex gap-14 items-center justify-center">
      {isShowPrevButton && (
        <ButtonChangeChapter func={handlePrevChapter}>
          <RiSkipLeftLine className="text-2xl" />
          TRƯỚC
        </ButtonChangeChapter>
      )}
      {isShowNextButton && (
        <ButtonChangeChapter func={handleNextChapter}>
          <RiSkipRightLine className="text-2xl" />
          SAU
        </ButtonChangeChapter>
      )}
    </div>
  );
};

export default GroupHandleChapterBottom;
