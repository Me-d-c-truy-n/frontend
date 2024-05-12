import slider_const from "../constants/slider.json"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Slider = () => {
  const slider = slider_const["slider"][getRandomInt(slider_const["slider"].length)];

  return (
    <div className='w-full mb-5'>
        <img src={slider} alt="slider" className='w-full cursor-pointer'/>
    </div>
  )
}

export default Slider