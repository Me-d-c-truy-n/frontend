import LoadingImage from '../Loading/LoadingImage'

interface Props {
  image: string
  name: string
}

const CustomImageAsBook = ({ image, name }: Props) => {
  return (
    <div className='book relative'>
      <span className='!z-10 absolute flash overflow-hidden'>
        <LoadingImage name={name} imageUrl={image} className='md:w-48 md:h-72 h-60 w-40 shadow-xl object-cover' />
      </span>
      <LoadingImage name={name} imageUrl={image} className='md:w-48 md:h-72 h-60 w-40 shadow-xl object-cover' />
    </div>
  )
}

export default CustomImageAsBook
