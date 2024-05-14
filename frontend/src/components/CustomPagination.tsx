import Pagination from '@mui/material/Pagination';
import { ThemeContext } from '../contexts/ThemeContext';
import { Dispatch, SetStateAction, useContext } from 'react';

interface Props {
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CustomPagination = ({ totalPage, currentPage, setCurrentPage }: Props) => {
  const { theme } = useContext(ThemeContext)!;
  
  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) =>{
    setCurrentPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > totalPage) setCurrentPage(1);
    setCurrentPage(page);
  }

  return (
    <div className="mt-5 flex justify-center">
      <Pagination 
        count={totalPage} 
        page={currentPage}
        color="primary" size="large" 
        onChange={handleChangePage}  
        className={`${theme=='dark' && 'dark-pagination' }`}
      />
    </div>
  )
}

export default CustomPagination