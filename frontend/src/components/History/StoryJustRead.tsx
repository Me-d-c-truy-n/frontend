import { useContext } from "react";
import TitleTab from "../TitleTab";
import StoryHistoryRow from "./StoryHistoryRow";
import { HistoryContext } from "../../contexts/HistoryContext";

const StoryJustRead = ({ isShowAll }: {isShowAll: boolean}) => {
  const { novels } = useContext(HistoryContext)!;

  return (
      <div className="mb-10 mt-2">
        {
          !isShowAll && novels.length > 0 &&
        <TitleTab name="TRUYỆN VỪA ĐỌC" link="/tu-truyen"/>
        }
        {
          novels.map((hs,idx) =>
            isShowAll?(
              <StoryHistoryRow 
                key={idx}
                data={hs}
                color={idx%2==1}
              />
            ):(
              idx<5?
              <StoryHistoryRow 
                key={idx}
                data={hs}
                color={idx%2==1}
              />:(<span key={idx} style={{visibility:'hidden'}} hidden></span>)
            )
          )
        }
      </div>
  )
}

export default StoryJustRead