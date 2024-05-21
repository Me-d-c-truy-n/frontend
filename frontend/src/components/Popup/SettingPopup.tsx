import { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { SettingsContext } from '../../contexts/SettingsContext';
import CustomSelection from './CustomSelection';
import { SelectionKey } from '../../types/key';
import CustomSelectColor from './CustomSelectColor';
import { changeAlign, changeFontSize, changeFontStyle, changeLeading, useSettingsStore } from '../../stores/settingsStore';
import { Align } from '../../types/align';

interface Props {
  close: ()=>void;
}
const SettingPopup = ({ close }: Props) => {
  const { background, color, setColor, resetSettings } = useContext(SettingsContext)!;

  const settings = useSettingsStore();
  
  return (
    <div className="z-10 fixed left-0 top-0 w-full h-full">
      <div className="mt-1 shadow-2xl p-5 w-11/12 md:w-6/12 mx-auto border rounded-lg border-amber-600"
      style={{backgroundColor: background, color: color}}
      >
        <div className='flex justify-between items-center mb-10'>
          <img src={logo} alt='logo' className='w-10'/>
          <h1 className='text-xl font-bold'>Cài đặt đọc truyện</h1>
          <GrClose className='text-xl cursor-pointer' onClick={close}/>
        </div>
        <div className='flex justify-between mb-4'>
          <div>Màu nền</div>
          <CustomSelectColor/>
        </div>
        <div className='flex justify-between mb-4'>
          <div>Màu chữ</div>
          <input 
            type="color" 
            value={color}
            className='w-32'
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className='flex justify-between mb-4'>
          <div>Cỡ chữ</div>
          <CustomSelection 
            value={settings.fontSize} 
            setValue={(fs: string) => changeFontSize(fs)}
            title={SelectionKey.SIZE}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Font chữ</div>
          <CustomSelection 
            value={settings.fontStyle} 
            setValue={(fs: string) => changeFontStyle(fs)}
            title={SelectionKey.FONT}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Chiều cao dòng</div>
          <CustomSelection 
            value={settings.leading} 
            setValue={(ld: string) => changeLeading(ld)}
            title={SelectionKey.LEADING}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Canh chữ</div>
          <CustomSelection 
            value={settings.align} 
            setValue={(al: string) => changeAlign(al as Align)}
            title={SelectionKey.ALIGN}
          />
        </div>

        <div className='flex items-center justify-center'>
          <button onClick={resetSettings} className='text-slate-600 px-4 py-1 rounded-md bg-white'>Mặc định</button>
        </div>
      </div>
    </div>
  )
}

export default SettingPopup