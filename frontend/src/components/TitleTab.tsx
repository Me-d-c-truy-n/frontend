import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

interface Props {
  name: string;
  link?: string;
  uppercase?: boolean;
  highlight?: string;
}

const TitleTab = ({ name, link, uppercase=false, highlight}: Props) => {
  if (link)
    return (
      <Link to={link} className="p-2 flex items-center justify-between mb-4 gap-2 font-mono">
          <h2 className={`text-xl text-amber-700 ${uppercase&&'uppercase'} `}
          >{name}</h2> 
          <hr className="flex-1 border-amber-700"/>
          <MdOutlineKeyboardDoubleArrowRight  className="text-amber-700 text-xl"/>
      </Link>
    )

    return (
      <div className="p-2 flex items-center justify-between mb-4 gap-2 font-mono">
          <h2 className={`text-xl text-amber-700 ${uppercase&&'uppercase'} gap-1`}>
            {name}
            {highlight === 'Loading' ?<Skeleton width={180}/>:
              <span className={`bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg text-white px-2 ${!highlight&&'hidden'}`}>{highlight}</span>
            }
          </h2>
          <hr className="flex-1 border-amber-700"/>
      </div>
    )
}

export default TitleTab