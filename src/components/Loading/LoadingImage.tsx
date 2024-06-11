import { useState } from "react";
import { cn } from "../../utils/cn";
import image_loading from "../../assets/images/image-loading.gif";
import loaderSlider from "../../assets/images/loaderSlider.svg";

import no_image from "../../assets/images/no-image.jpg";

interface Props {
  name: string;
  imageUrl: string;
  className: string;
  isSlider?: boolean;
}

const LoadingImage = ({ name, imageUrl, className, isSlider = false }: Props) => {
  const [error, setError] = useState<boolean>(false);

  return (
    <img
      src={isSlider ? loaderSlider : image_loading}
      alt={name}
      className={cn(className)}
      onLoad={({ currentTarget }) => {
        if (error) return;
        currentTarget.src = imageUrl;
      }}
      onError={({ currentTarget }) => {
        setError(true);
        currentTarget.onerror = null;
        currentTarget.src = no_image;
      }}
    />
  );
};

export default LoadingImage;
