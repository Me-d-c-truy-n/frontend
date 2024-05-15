import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import '../assets/style/selection.css'
import { THEME } from "../types/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

interface Props {
  currentChapter: number;
  totalChapter: number;
  novelId: string;
  title: string;
}

const CustomSelectionNavigate = ({ currentChapter, totalChapter, title, novelId }: Props) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext)!;
  
  const indents = [];
  for (let chapter = 1; chapter <= totalChapter; chapter++) {
    indents.push( 
      <MenuItem value={chapter} key={chapter}>
        <span>{chapter}</span>
      </MenuItem>
    );
  }

  return (
    <FormControl className={`${theme==THEME.DARK&&'dark-select'} w-24`}>
      <InputLabel id={'demo-simple-select-label' + title} className="dark:!text-white capitalize"> 
        {title}
      </InputLabel>
      <Select
        labelId={'demo-simple-select-label' + title}
        id={`demo-simple-select` + title}
        value={currentChapter}
        label={title}
        onChange={(e) => navigate(`/truyen/${novelId}/${e.target.value}`)}
      >
        {indents}
      </Select>
    </FormControl>
  )
}

export default CustomSelectionNavigate