import { FiDownload } from "react-icons/fi";
import { ApiDownloadChapter } from "../../api/apiDownload";
import { useMutation } from "@tanstack/react-query";

interface Props {
  chapterId: string;
  novelId: string;
  file: string;
  server: string;
  close: () => void;
}

interface Api {
  chapterId: string;
  novelId: string;
  file: string;
  server: string;
}

const ButtonDownload = ({ chapterId, novelId, file, server, close }: Props) => {

  const callApiDownload = useMutation({
    mutationFn: 
      async ({ chapterId, novelId, file, server}: Api) => 
        ApiDownloadChapter(server, file, novelId, chapterId),
  })

  const handleDownload = () => {
    callApiDownload.mutate({server, file, novelId, chapterId});
    close();
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