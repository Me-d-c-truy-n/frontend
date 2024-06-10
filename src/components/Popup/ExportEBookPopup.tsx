import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import "../../assets/style/inputNumber.scss";
import SelectionExportType from "../Export/SelectionExportType";
import ButtonDownload from "../Export/ButtonDownload";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllExport } from "../../api/apiPlugin";
import DownloadFileSkeleton from "../Loading/DownloadFileSkeleton";
import { useModal } from "../../hooks/useModal";
import ButtonClose from "../Button/ButtonClose";
import GroupInputDownload from "../Export/GroupInputDownload";
import { FaInfoCircle } from "react-icons/fa";

interface Props {
  close: () => void;
  novelId: string;
  server: string;
  chapterId: string;
}

const ExportEBookPopup = ({ close, novelId, server, chapterId }: Props) => {
  const [selectedExport, setSelectedExport] = useState<string>("epub");
  const [numberChapters, setNumberChapters] = useState<number | "">(1);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { isFetching, data: listExport } = useQuery({
    queryKey: ["file_export"],
    queryFn: async () => {
      const data: string[] = await ApiGetAllExport();

      return data;
    },
    retry: 1,
  });

  const { modalRef, handleClickOutside } = useModal(close);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  function changeNumberOfChapters(number: string) {
    if (isNaN(parseInt(number))) {
      setNumberChapters("");
    } else {
      setNumberChapters(parseInt(number));
    }
    setErrorMessage("");
  }

  if (isFetching || !listExport || listExport?.length <= 0) return <DownloadFileSkeleton close={close} />;

  return (
    <div
      ref={modalRef}
      onClick={handleClickOutside}
      className="z-[1000] px-1 fixed left-0 top-0 w-full h-full flex justify-center items-center shadow-lg backdrop-blur-sm"
    >
      <div className="shadow-2xl p-2 md:py-5 md:px-4 mx-auto border rounded-lg border-amber-600 bg-white dark:bg-black dark:text-white">
        <div className="flex justify-between items-center mb-5">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="text-xl font-bold">Tải truyện - {selectedExport}</h1>
          <ButtonClose close={close} />
        </div>
        <div className="px-4">
          <div className="flex gap-3 items-center justify-center flex-wrap">
            {listExport.map((ep) => (
              <SelectionExportType
                key={ep}
                setValue={() => setSelectedExport(ep)}
                selectedExport={selectedExport}
                id={ep}
              />
            ))}
          </div>
          <GroupInputDownload
            chapterId={chapterId}
            numberChapters={numberChapters}
            setNumberChapters={changeNumberOfChapters}
          />
          <p
            className={`text-red-600 text-sm font-semibold ${errorMessage.length <= 0 && "hidden"} flex items-center gap-1`}
          >
            <FaInfoCircle />
            {errorMessage}
          </p>
          <ButtonDownload
            close={close}
            novelId={novelId}
            server={server}
            file={selectedExport}
            chapterId={chapterId}
            numberChapters={numberChapters}
            setErrorMessage={setErrorMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ExportEBookPopup;
