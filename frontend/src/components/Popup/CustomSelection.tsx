import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Dispatch, SetStateAction, useContext } from "react";
import data from '../../constants/selection.json';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import '../../assets/style/selection.css'
import { ThemeContext } from "../../contexts/ThemeContext";
import { THEME } from "../../types/theme";
import { SelectionKey } from "../../types/key";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  title: SelectionKey;
}

const CustomSelection = ({ value, setValue, title }: Props) => {
  const { theme } = useContext(ThemeContext)!;
  
  return (
    <FormControl className={`w-32 ${theme==THEME.DARK&&'dark-select'}`}>
      <InputLabel id={'demo-simple-select-label' + title} className="dark:!text-white capitalize"> 
        {title}
      </InputLabel>
      <Select
        labelId={'demo-simple-select-label' + title}
        id={`demo-simple-select` + title}
        value={value}
        label={title}
        onChange={(e) => setValue(e.target.value)}
      >
        {
          data[title].map((fs)=>(typeof fs === 'string')?(
              <MenuItem value={fs} key={fs}>
                <span>{fs}</span>
              </MenuItem>
            ):(
              <MenuItem value={fs.value} key={fs.value}>
                <span>{fs.key}</span>
              </MenuItem>
            )
          )
        }
      </Select>
    </FormControl>
  )
}

export default CustomSelection