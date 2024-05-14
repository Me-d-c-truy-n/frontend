import { useContext, useState } from 'react';
import logo from '../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('q') || "");
  
  const { theme, changeTheme } = useContext(ThemeContext)!;

  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>){
    if (e.key != 'Enter') return;
    handleSearch();
  }

  function handleSearch() {
    if (searchValue.trim().length <= 0) return;

    navigate(`/tim-kiem?q=${searchValue}`);
  }

  function handleChangeTheme() {
    if (theme === 'light') changeTheme('dark');
    else changeTheme('light');
  }

  return (
    <div className="flex justify-between items-center pt-3 mb-6 dark:text-white">
        <Link to={'/'}>
          <img src={logo} alt="logo" width={60}/>
        </Link>
        <div className={`bg-white dark:bg-stone-950 dark:border-slate-600 flex items-center w-72 md:w-96 border p-2 ps-5 rounded-full shadow-sm outline-none ${isSelected?'border-amber-500':''}`}>
          <input className='dark:bg-stone-950 outline-none w-11/12' placeholder='Tìm kiếm theo tên truyện, tác giả'
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
        <button className='hover:shadow p-1 rounded-lg' onClick={handleChangeTheme}>
          {
            theme =='light' ?
            <CiLight className='text-2xl' />
            :
            <CiDark className='text-2xl'/>
          }
        </button>
    </div>
  )
}

export default Header