import { useContext } from "react";
import listColor from "../../constants/selection.json";
import { SettingsContext } from "../../contexts/SettingsContext";

const CustomSelectColor = () => {
  const { background, setBackground } = useContext(SettingsContext)!;

  return (
    <>
      <input
        type="color"
        className="w-32 dark:text-black bg-white"
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        list="presetColors"
      />
      <datalist id="presetColors">
        {listColor["color"].map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default CustomSelectColor;
