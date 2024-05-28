import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface Props {
  name: string;
  link?: string;
  uppercase?: boolean;
}

const TitleTab = ({ name, link, uppercase=false}: Props) => {
  if (link)
    return (
      <Link to={link} className="dark:bg-slate-900 p-2 flex items-center justify-between mb-4 gap-2">
          <h2 className={`text-xl text-amber-700 ${uppercase&&'uppercase'} `}>{name}
          </h2> 
          <MdOutlineKeyboardDoubleArrowRight  className="text-amber-700 text-xl"/>
      </Link>
    )

    return (
      <div className="dark:bg-slate-900 p-2 flex items-center justify-between mb-4">
          <h2 className={`text-xl text-amber-700 ${uppercase&&'uppercase'}`}>{name}</h2>
      </div>
    )
}

export default TitleTab