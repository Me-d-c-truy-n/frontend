import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";

interface Props {
  novelId: string;
  file: string;
  server: string;
  close: () => void;
}

// interface Api {
//   chapterId: string;
//   novelId: string;
//   file: string;
//   server: string;
// }

const ButtonDownload = ({ novelId, file, server, close }: Props) => {

  // const callApiDownload = useMutation({
  //   mutationFn: 
  //     async ({ chapterId, novelId, file, server}: Api) => 
  //       ApiDownloadChapter(server, file, novelId, chapterId),
  // })

  const handleDownload = () => {
    close();
    //callApiDownload.mutate({server, file, novelId, chapterId});
    // window.open(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${server}/tai-truyen/${file}/${novelId}/${chapterId}`);
    toast.info("Truyện đang được tải");
    window.open(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${server}/tai-truyen/${novelId}/${file}`);
  }

  return (
    <div className='flex justify-center mt-6'>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-[1px_2px_14px_2px_rgb(255,154,0,40%)]"/>
        <div 
          className="px-4 py-2 bg-slate-950 text-white rounded-[6px] relative group transition duration-200 hover:bg-transparent flex gap-3 items-center"
          onClick={handleDownload}
        >
          <FiDownload/>
          Tải truyện
        </div>
      </button>
    </div>
  )
}

export default ButtonDownload