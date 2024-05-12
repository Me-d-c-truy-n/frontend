import { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { GrClose } from "react-icons/gr";
import { SettingsContext } from '../../contexts/SettingsContext';

interface Props {
  close: ()=>void;
}
const SettingPopup = ({ close }: Props) => {
  const { background, setBackground, color, setColor, fontSize, setFontSize } = useContext(SettingsContext)!;
  
  const handleResetSetting = () => {
    setBackground("#f8f8e3")
    setColor("#000000");
    setFontSize("25px");
  } 
  return (
    <div className="z-10 fixed left-0 mt-2 top-0 w-full">
      <div className="shadow-2xl p-5 w-11/12 md:w-6/12 mx-auto border rounded-lg border-amber-600"
      style={{backgroundColor: background, color: color}}
      >
        <div className='flex justify-between items-center mb-10'>
          <img src={logo} alt='logo' className='w-10'/>
          <h1 className='text-xl font-bold'>Cài đặt đọc truyện</h1>
          <GrClose className='text-xl cursor-pointer' onClick={close}/>
        </div>
        <div className='flex justify-between mb-4'>
          <div>Màu nền</div>
          <input 
            type="color" 
            value={background}
            className='w-20'
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
        <div className='flex justify-between mb-4'>
          <div>Màu chữ</div>
          <input 
            type="color" 
            value={color}
            className='w-20'
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className='flex justify-between mb-4'>
          <div>Cỡ chữ</div>
          <input 
            type="text" 
            value={fontSize}
            className='w-20 px-5 py-1'
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>

        <div className='flex items-center justify-center'>
          <button onClick={handleResetSetting} className='px-4 py-1 rounded-md bg-white'>Mặc định</button>
        </div>
      </div>
    </div>
  )
}

export default SettingPopup