import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChapter } from "../types/novel";
import { useKeyboardShortcut } from "./useKeyboardShortcut";

interface Props {
  chapter: IChapter | null;
  chapterId: string | undefined;
  novelId: string | undefined;
  isActive: boolean;
}

const useChangeChapter = ({ chapter, chapterId, novelId, isActive }: Props) => {
  const navigate = useNavigate();

  const handleNextChapter = () => {
    if (chapter == null || chapterId == null) return;
    if (!chapter.nextChapterId || chapter.nextChapterId.length <= 0) {
      toast.error("Hiện tại đây đã là chương cuối", {
        toastId: "last-chapter",
      });
      return;
    }
    toast.dismiss();
    navigate(`/truyen/${novelId}/${chapter.nextChapterId}`);
  };

  const handlePrevChapter = () => {
    if (chapter == null || chapterId == null) return;
    if (!chapter.preChapterId || chapter.preChapterId.length <= 0) {
      toast.error("Đây đã là chương đầu tiên", {
        toastId: "first-chapter",
      });
      return;
    }
    toast.dismiss();
    navigate(`/truyen/${novelId}/${chapter.preChapterId}`);
  };

  useKeyboardShortcut({
    isActive,
    key: "ArrowLeft",
    onKeyPressed: handlePrevChapter,
  });

  useKeyboardShortcut({
    isActive,
    key: "ArrowRight",
    onKeyPressed: handleNextChapter,
  });

  return { handleNextChapter, handlePrevChapter };
};

export default useChangeChapter;
