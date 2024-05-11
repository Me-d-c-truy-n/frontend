import StoryJustRead from '../components/History/StoryJustRead'
import ListNovel from '../components/Novel/ListNovel'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <StoryJustRead/>
      <ListNovel/>
    </div>
  )
}

export default Home