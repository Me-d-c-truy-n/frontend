import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import '../../assets/style/inputNumber.scss'
import SelectionExportType from '../Export/SelectionExportType';
import ButtonDownload from '../Export/ButtonDownload';
import { useQuery } from '@tanstack/react-query';
import { ApiGetAllExport } from '../../api/apiPlugin';
import DownloadFileSkeleton from '../Loading/DownloadFileSkeleton';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';

interface Props {
  close: ()=>void;
  novelId: string;
  chapterId: string;
  server: string;
}

const ExportEBookPopup = ({ close, novelId, chapterId, server }: Props) => {
  const [selectedExport, setSelectedExport] = useState<string>("pdf");

  const { isFetching, data: listExport } = useQuery({
    queryKey: ['file_export'],
    queryFn: async () => {
      const data: string[] = await ApiGetAllExport();

      return data;
    },
    retry: 1
  })

  useKeyboardShortcut({
    key: "Escape",
    onKeyPressed: () => close(),
  })

  
  if (isFetching || !listExport|| listExport?.length <= 0) 
    return <DownloadFileSkeleton close={close}/>

  return (
    <div className="z-10 px-1 fixed left-0 top-0 w-full h-full flex justify-center items-center shadow-lg backdrop-blur-sm">
      <div className="shadow-2xl p-2 md:py-5 md:px-4 mx-auto border rounded-lg border-amber-600 bg-white dark:bg-black dark:text-white"
      >
        <div className='flex justify-between items-center mb-5'>
          <img src={logo} alt='logo' className='w-10'/>
          <h1 className='text-xl font-bold'>Tải truyện</h1>
          <GrClose className='text-xl cursor-pointer' onClick={close}/>
        </div>
        <div className='px-6'>
          <div className='flex gap-3 items-center justify-center flex-wrap'>
            {
              listExport.map((ep) =>
                <SelectionExportType
                  key={ep}
                  setValue={() => setSelectedExport(ep)}
                  selectedExport={selectedExport}
                  id={ep}
                />
              )
            }
          </div>
          <ButtonDownload 
            close={close}
            chapterId={chapterId}
            novelId={novelId}
            server={server}
            file={selectedExport}
          />
        </div>
      </div>
    </div>
  )
}

export default ExportEBookPopup