import no_image from "../../assets/images/no-image.jpg";

interface Props {
  image: string;
  name: string;
}


const CustomImageAsBook = ({ image, name }: Props) => {
  return (
    <div className="book relative">
      <span className="!z-10 absolute">
        <img src={image} alt={name} className="md:w-48 md:h-72 h-60 w-40 shadow-xl object-cover"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=no_image;
          }}
        />
      </span>
      <img src={image} alt={name} className="md:w-48 md:h-72 h-60 w-40 shadow-xl object-cover"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=no_image;
          }}
      />
    </div>
  )
}

export default CustomImageAsBook