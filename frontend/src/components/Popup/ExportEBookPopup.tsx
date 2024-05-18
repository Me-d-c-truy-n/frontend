import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";
import listExport from '../../constants/export.json';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  close: ()=>void;
}

const ExportEBookPopup = ({ close }: Props) => {
  const [selectedExport, setSelectedExport] = useState<string>("txt");
  const [fromChapter, setFromChapter] = useState<number>();
  const [toChapter, setToChapter] = useState<number>();

  const handleDownload = () =>{
    if (!fromChapter || fromChapter <= 0) return toast.error("Nhập chương bắt đầu tải");
    if (!toChapter || toChapter<= 0) return toast.error("Nhập chương cuối cần tải");
    if (toChapter < fromChapter) return toast.error("Chương đầu không được lớn hơn chương cuối")
    // TODO: call api tải truyện

    close();
  }

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
              listExport["export"].map((ep) =>
                <button 
                  key={ep.id} 
                  onClick={() => setSelectedExport(ep.id)}
                  className={`border border-slate-500 p-3 rounded-lg flex flex-col justify-center items-center uppercase ${selectedExport===ep.id?'shadow-lg bg-slate-900 text-white dark:bg-white dark:text-black ':'dark:bg-slate-950 bg-slate-100'}`} 
                >
                  <img src={ep.image} alt={ep.id} className='w-14 h-14 mb-1'/>
                  {ep.id}
                </button>
              )
            }
          </div>
          <div className='mt-4 mx-auto'>
            <input 
              type="number" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Từ chương" 
              value={fromChapter}
              onChange={(e) => setFromChapter(parseInt(e.target.value))}
              required 
            />
            <input 
              type="number" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" 
              placeholder="Đến chương"
              value={toChapter}
              onChange={(e) => setToChapter(parseInt(e.target.value))}
              required 
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button className='transition ease-in-out border py-2 px-4 rounded-lg gap-3 flex items-center justify-center border-black dark:border-white hover:text-white hover:border-transparent hover:bg-amber-700'
            onClick={handleDownload}
            >
              <FiDownload/>
              Tải truyện
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportEBookPopup