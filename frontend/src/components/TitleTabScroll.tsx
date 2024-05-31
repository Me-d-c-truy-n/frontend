import { useEffect } from 'react'
import TitleTab from './TitleTab';

interface Props {
  id: string;
  title: string;
  name?: string;
  isMb?: boolean;
}

const TitleTabScroll = ({ id, title, name, isMb=true }: Props) => {
  useEffect(()=>{
    setTimeout(()=>{
      const element = document.getElementById(id);
      element?.scrollIntoView({
        behavior: 'smooth'
      }); 
    }, 200)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div id={id} className="mt-1">
      <TitleTab
        name={name?name:""}
        highlight={title}
        isMb={isMb}
      />
    </div>
  )
}

export default TitleTabScroll