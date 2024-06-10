import CustomInputNumber from "./CustomInputNumber";
import { subSlugChapter } from "../../utils/helpers";

interface Props {
  numberChapters: number | "";
  chapterId: string;
  // eslint-disable-next-line no-unused-vars
  setNumberChapters: (number: string) => void;
}

const GroupInputDownload = ({ chapterId, numberChapters, setNumberChapters }: Props) => {
  return (
    <div className="mt-4">
      <p className="mb-1 text-amber-600 text-center">
        Nhập số chương sẽ tải tính từ <b>{subSlugChapter(chapterId)}</b>
      </p>
      <CustomInputNumber placeholder="Số chương cần tải" value={numberChapters} setValue={setNumberChapters} />
    </div>
  );
};

export default GroupInputDownload;
