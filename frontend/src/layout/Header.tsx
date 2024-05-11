import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('q') || "");
  
  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>){
    if (e.key != 'Enter') return;
    handleSearch();
  }

  function handleSearch() {
    if (searchValue.trim().length <= 0) return;

    navigate(`/tim-kiem?q=${searchValue}`);
  }


  return (
    <div className="flex justify-between items-center mt-3 mb-6">
        <Link to={'/'}>
          <img src={logo} alt="logo" width={60}/>
        </Link>
        <div className={`bg-white flex items-center w-96 border p-2 ps-5 rounded-full shadow-sm outline-none ${isSelected?'border-amber-500':''}`}>
          <input className='outline-none w-11/12' placeholder='Tìm kiếm theo tên truyện, tác giả'
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
      <div>
      </div>
    </div>
  )
}

export default Header