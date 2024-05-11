import { TbPlayerTrackNext } from "react-icons/tb";
import { Link } from "react-router-dom";

const TitleTab = ({ name, link}: {name: string, link: string}) => {
  return (
    <Link to={link} className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-amber-700">{name}</h2>
          <TbPlayerTrackNext className="text-amber-700 text-xl"/>
    </Link>
  )
}

export default TitleTab