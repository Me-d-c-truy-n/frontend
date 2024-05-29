import { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { SettingsContext } from '../../contexts/SettingsContext';
import CustomSelection from './CustomSelection';
import { SelectionKey } from '../../types/key';
import CustomSelectColor from './CustomSelectColor';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../store';
import { changeAlign, changeFontSize, changeFontStyle, changeLeading } from '../../store/settings';
import { useModal } from '../../hooks/useModal';

interface Props {
  close: ()=>void;
}
const SettingPopup = ({ close }: Props) => {
  const { background, color, setColor, resetSettings } = useContext(SettingsContext)!;

  const settings = useSelector((state: AppState) => state.settings)
  const dispatch = useDispatch<AppDispatch>();

  const { modalRef, handleClickOutside } = useModal(close);
  
  return (
    <div 
      ref={modalRef}
      onClick={handleClickOutside}
      className="z-10 fixed left-0 top-0 w-full h-full" 
      style={{"backgroundColor": "rgba(0, 0, 0, 0.5)"}}
    >
      <div className="mt-1 shadow-2xl p-5 w-11/12 md:w-6/12 mx-auto border rounded-lg border-amber-600"
      style={{backgroundColor: background, color: color}}
      >
        <div className='flex justify-between items-center mb-10'>
          <img src={logo} alt='logo' className='w-10'/>
          <h1 className='text-xl font-bold'>Cài đặt đọc truyện</h1>
          <GrClose className='text-xl cursor-pointer text-gray-500 hover:text-black' onClick={close}/>
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
            setValue={(fs: string) => dispatch(changeFontSize(fs))}
            title={SelectionKey.SIZE}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Font chữ</div>
          <CustomSelection 
            value={settings.fontStyle} 
            setValue={(fs: string) => dispatch(changeFontStyle(fs))}
            title={SelectionKey.FONT}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Chiều cao dòng</div>
          <CustomSelection 
            value={settings.leading} 
            setValue={(ld: string) => dispatch(changeLeading(ld))}
            title={SelectionKey.LEADING}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div>Canh chữ</div>
          <CustomSelection 
            value={settings.align} 
            setValue={(al: string) => dispatch(changeAlign(al))}
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