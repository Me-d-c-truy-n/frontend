import { Dispatch, SetStateAction } from "react";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";

interface Props {
  novelId: string;
  file: string;
  server: string;
  chapterId: string;
  numberChapters: number | "";
  setErrorMessage: Dispatch<SetStateAction<string>>;
  close: () => void;
}

const ButtonDownload = ({ novelId, file, server, chapterId, numberChapters, close, setErrorMessage }: Props) => {
  function checkNumberChaptersIsValid(numberChapters: number | ""): boolean {
    if (numberChapters === undefined || numberChapters === null || numberChapters === "") {
      setErrorMessage("Vui lòng nhập số chương muốn tải");
      return false;
    }
    if (numberChapters > 300) {
      setErrorMessage("Chỉ có thể tải tối đa 300 chương");
      return false;
    }
    return true;
  }

  const handleDownload = () => {
    if (!checkNumberChaptersIsValid(numberChapters)) return;
    close();
    toast.info("Truyện đang được tải");
    window.open(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/${server}/tai-truyen/${novelId}/${file}?fromChapterId=${chapterId}&numChapters=${numberChapters}`,
    );
  };

  return (
    <div className="flex justify-center mt-3">
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-[1px_2px_14px_2px_rgb(255,154,0,40%)]" />
        <div
          className="px-4 py-2 bg-slate-950 text-white rounded-[6px] relative group transition duration-200 hover:bg-transparent flex gap-3 items-center"
          onClick={handleDownload}
        >
          <FiDownload />
          Tải truyện
        </div>
      </button>
    </div>
  );
};

export default ButtonDownload;
