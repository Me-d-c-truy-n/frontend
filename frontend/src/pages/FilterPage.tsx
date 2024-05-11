import { useSearchParams } from "react-router-dom";
import Slider from "../components/Slider"

import novels from '../constants/novel.json';
import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <div>
      <Slider/>
      <div>
        <h1 className="uppercase text-amber-700 mb-5">TÌM KIẾM:{" "}{searchParams.get('q')}</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
          {
            novels['novel'].map((novel, idx) =>
              <BoxNovelAuthor key={idx} novel={novel}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FilterPage