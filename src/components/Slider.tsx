import { useEffect, useState } from "react";
import slider_const from "../constants/slider.json";
import Skeleton from "react-loading-skeleton";
import LoadingImage from "./Loading/LoadingImage";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface Props {
  isLoading?: boolean;
}

const Slider = ({ isLoading = false }: Props) => {
  const [slider, setSlider] = useState("");

  useEffect(() => {
    setSlider(slider_const["slider"][getRandomInt(slider_const["slider"].length)]);
  }, []);

  return (
    <div className="w-full">
      {isLoading || !slider || slider.trim().length <= 0 ? (
        <Skeleton className="h-20 lg:h-48" />
      ) : (
        <LoadingImage name="slider" imageUrl={slider} className="w-full cursor-pointer" />
      )}
    </div>
  );
};

export default Slider;
