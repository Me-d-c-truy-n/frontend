import Pagination from '@mui/material/Pagination';
import { ThemeContext } from '../contexts/ThemeContext';
import { Dispatch, SetStateAction, useContext } from 'react';

interface Props {
  changeThemeEffect?: boolean;
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  topList: string;
}

const CustomPagination = ({ totalPage, currentPage, setCurrentPage, changeThemeEffect = true, topList }: Props) => {
  const { theme } = useContext(ThemeContext)!;
  
  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) =>{
    setCurrentPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > totalPage) setCurrentPage(1);
    setCurrentPage(page);
    const element = document.getElementById(topList);
    element?.scrollIntoView({
      behavior: 'smooth'
    }); 
  }

  return (
    <>
      {
        totalPage > 1 &&
        <div className="mt-5 flex justify-center">
          <Pagination 
            count={totalPage} 
            page={currentPage}
            color="primary" size="large" 
            onChange={handleChangePage}  
            className={`${theme=='dark' && changeThemeEffect && 'dark-pagination' }`}
          />
        </div>
      }
    </>
  )
}

export default CustomPagination