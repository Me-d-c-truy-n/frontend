import { useState } from "react";
import { cn } from "../../utils/cn";
import image_loading from "../../assets/images/image-loading.gif";
import no_image from "../../assets/images/no-image.jpg";

interface Props {
  name: string;
  imageUrl: string;
  className: string;
}

const LoadingImage = ({ name, imageUrl, className }: Props) => {
  const [error, setError] = useState<boolean>(false);
  
  return (
    <img src={image_loading} alt={name} 
      className={cn(className)}
      onLoad={({ currentTarget }) => {
        if (error) return;
        currentTarget.src=imageUrl;
      }}
      onError={({ currentTarget }) => {
        setError(true);
        currentTarget.onerror = null;
        currentTarget.src=no_image;
      }}
    />
  )
}

export default LoadingImage