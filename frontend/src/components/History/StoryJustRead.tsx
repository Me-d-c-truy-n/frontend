import { useContext } from "react";
import TitleTab from "../TitleTab";
import StoryHistoryRow from "./StoryHistoryRow";
import { HistoryContext } from "../../contexts/HistoryContext";

const StoryJustRead = () => {
  const { novels } = useContext(HistoryContext)!;

  return (
      <div className="mb-10">
        {
          novels.length > 0 &&
        <TitleTab name="TRUYỆN VỪA ĐỌC" link="/"/>
        }
        {
          novels.map((hs,idx) =>
            <StoryHistoryRow 
              key={idx}
              data={hs}
              color={idx%2==1}
            />
          )
        }
      </div>
  )
}

export default StoryJustRead