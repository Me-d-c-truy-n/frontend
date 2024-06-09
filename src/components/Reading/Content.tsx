import { useContext } from "react";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import { SettingsContext } from "../../contexts/SettingsContext";

const Content = ({ content }: { content: string }) => {
  const { color } = useContext(SettingsContext)!;
  const settings = useSelector((state: AppState) => state.settings);

  return (
    <div
      className="mt-8 mb-4 px-2"
      style={{
        fontSize: settings.fontSize,
        color: color,
        fontFamily: settings.fontStyle,
        lineHeight: settings.leading,
        textAlign: settings.align,
      }}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></div>
  );
};

export default Content;
