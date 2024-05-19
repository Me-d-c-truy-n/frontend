import { FiDownload } from "react-icons/fi";

interface Props {
  chapterId: string;
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

const ButtonDownload = ({ chapterId, novelId, file, server, close }: Props) => {

  // const callApiDownload = useMutation({
  //   mutationFn: 
  //     async ({ chapterId, novelId, file, server}: Api) => 
  //       ApiDownloadChapter(server, file, novelId, chapterId),
  // })

  const handleDownload = () => {
    close();
    //callApiDownload.mutate({server, file, novelId, chapterId});
    window.open(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${server}/tai-truyen/${file}/${novelId}/${chapterId}`);
  }

  return (
    <div className='flex justify-center mt-6'>
      <button className='transition ease-in-out border py-2 px-4 rounded-lg gap-3 flex items-center justify-center border-black dark:border-white hover:text-white hover:border-transparent hover:bg-amber-700'
      onClick={handleDownload}
      >
        <FiDownload/>
        Tải truyện
      </button>
    </div>
  )
}

export default ButtonDownload