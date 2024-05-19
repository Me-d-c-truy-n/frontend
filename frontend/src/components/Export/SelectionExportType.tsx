import { getImageOfExportFile } from "../../utils/helpers";

interface Props {
  setValue: () => void;
  selectedExport: string;
  id: string;
}

const SelectionExportType = ({ setValue, selectedExport, id }: Props) => {
  return (
    <button 
      onClick={setValue}
      className={`transition ease-in-out duration-300 border border-slate-500 p-3 rounded-lg flex flex-col justify-center items-center uppercase ${selectedExport===id?'shadow-lg bg-slate-900 text-white dark:bg-white dark:text-black scale-110':'dark:bg-slate-950 bg-slate-100'}`} 
    >
      <img src={getImageOfExportFile(id)} alt={id} className='w-14 h-14 mb-1'/>
      {id}
    </button>
  )
}

export default SelectionExportType