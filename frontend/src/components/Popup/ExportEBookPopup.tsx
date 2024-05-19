import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import { toast } from 'react-toastify';
import '../../assets/style/inputNumber.css'
import CustomInputNumber from '../Export/CustomInputNumber';
import SelectionExportType from '../Export/SelectionExportType';
import ButtonDownload from '../Export/ButtonDownload';
import { useQuery } from '@tanstack/react-query';
import { ApiGetAllExport } from '../../api/apiPlugin';
import DownloadFileSkeleton from '../Loading/DownloadFileSkeleton';

interface Props {
  close: ()=>void;
}

const ExportEBookPopup = ({ close }: Props) => {
  const [selectedExport, setSelectedExport] = useState<string>("pdf");
  const [fromChapter, setFromChapter] = useState<number>();
  const [toChapter, setToChapter] = useState<number>();

  const { isFetching, data: listExport } = useQuery({
    queryKey: ['file_export'],
    queryFn: async () => {
      const data: string[] = await ApiGetAllExport();

      return data;
    },
    retry: 1
  })

  const handleDownload = () =>{
    if (!fromChapter || fromChapter <= 0) return toast.error("Nhập chương bắt đầu tải");
    if (!toChapter || toChapter<= 0) return toast.error("Nhập chương cuối cần tải");
    if (toChapter < fromChapter) return toast.error("Chương đầu không được lớn hơn chương cuối")
    // TODO: call api tải truyện

    close();
  }
  
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
          <div className='mt-4 mx-auto'>
            <CustomInputNumber
              placeholder='Từ chương'
              value={fromChapter}
              setValue={setFromChapter}
            />
            <CustomInputNumber
              placeholder='Đến chương'
              value={toChapter}
              setValue={setToChapter}
            />
          </div>
          <ButtonDownload handleDownload={handleDownload}/>
        </div>
      </div>
    </div>
  )
}

export default ExportEBookPopup