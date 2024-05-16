import { useContext, useState } from 'react';
import logo from '../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { ChapterOpenContext } from '../contexts/ChapterOpenContext';
import { THEME } from '../types/theme';

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('q') || "");
  
  const { theme, changeTheme } = useContext(ThemeContext)!;
  const { isOpen } = useContext(ChapterOpenContext)!;

  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>){
    if (e.key != 'Enter') return;
    handleSearch();
  }

  function handleSearch() {
    if (searchValue.trim().length <= 0) return;

    navigate(`/tim-kiem?q=${searchValue}`);
  }

  function handleChangeTheme() {
    if (theme === THEME.LIGHT) changeTheme(THEME.DARK);
    else changeTheme(THEME.LIGHT)
  }

  return (
    <div className={`flex justify-between items-center pt-3 mb-6 ${!isOpen&&'dark:text-white'} `}>
        <Link to={'/'}>
          <img src={logo} alt="logo" width={60}/>
        </Link>
        <div className={`${!isOpen && 'dark:bg-stone-950'}bg-white dark:border-slate-600 border-slate-300 flex items-center w-72 md:w-96 border p-2 ps-5 rounded-full shadow-sm outline-none ${isSelected?'border-amber-500':''}`}>
          <input className={`dark:text-slate-200 bg-transparent outline-none w-11/12`}placeholder='Tìm kiếm theo tên truyện, tác giả'
          onFocus={() => setIsSelected(true)}
          onBlur={() => setIsSelected(false)}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handlePressEnter}
          ></input>
          <CiSearch className='text-xl text-amber-600 font-bold cursor-pointer'
            onClick={handleSearch}
          />
        </div>
        <button className='outline-none hover:shadow p-1 rounded-lg' onClick={handleChangeTheme}>
          {
            theme =='light' ?
            <CiLight className='text-2xl text-black' />
            :
            <CiDark className='text-2xl text-white'/>
          }
        </button>
    </div>
  )
}

export default Header