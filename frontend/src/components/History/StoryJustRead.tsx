import TitleTab from "../TitleTab";
import data from '../../constants/history.json';
import StoryHistoryRow from "./StoryHistoryRow";

const StoryJustRead = () => {
  return (
      <div className="mb-10">
        <TitleTab name="TRUYỆN VỪA ĐỌC" link="/"/>
        {
          data['history'].map((hs,idx) =>
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