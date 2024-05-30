import Pagination from '@mui/material/Pagination';
import { ThemeContext } from '../contexts/ThemeContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import  '../assets/style/pagination.scss';

interface Props {
  changeThemeEffect?: boolean;
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  topList: string;
  isDelay?: boolean;
}

const CustomPagination = ({ totalPage, currentPage, setCurrentPage, changeThemeEffect = true, topList, isDelay=false }: Props) => {
  const { theme } = useContext(ThemeContext)!;
  const matches = useMediaQuery('(min-width:480px)');

  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) =>{
    setCurrentPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > totalPage) setCurrentPage(1);
    setCurrentPage(page);
    if (isDelay) {
      setTimeout(()=>{
        const element = document.getElementById(topList);
        element?.scrollIntoView({
          behavior: 'smooth'
        }); 
      }, 10)
    } else {
      const element = document.getElementById(topList);
      element?.scrollIntoView({
        behavior: 'smooth'
      }); 
    }
  }

  return (
    <>
      {
        totalPage > 1 &&
        <div className="mt-5 flex justify-center">
          <Pagination 
            count={totalPage} 
            page={currentPage}
            color="primary" size={matches?"large":"small"}
            onChange={handleChangePage}  
            className={`${theme=='dark' && changeThemeEffect && 'dark-pagination'}`}
          />
        </div>
      }
    </>
  )
}

export default CustomPagination