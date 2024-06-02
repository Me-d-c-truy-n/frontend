import StoryJustRead from '../components/History/StoryJustRead'
import MyHelmet from '../components/MyHelmet'
import ListNovel from '../components/Novel/ListNovel'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <MyHelmet 
        title={import.meta.env.VITE_REACT_APP_NAME}
        description={'Web tổng hợp và đọc tiểu thuyết trực tuyến'}
      />
      <Slider/>
      <StoryJustRead isShowAll={false}/>
      <ListNovel/>
    </div>
  )
}

export default Home