interface Props {
  color?: string;
  name: string;
}

const ButtonCategory = ({ color = 'green', name }: Props) => {
  return (
    <div className="cursor-pointer text-sm p-1 px-2 border rounded-md capitalize" style={{color: color, borderColor: color}}>
      {name}
    </div>
  )
}

export default ButtonCategory