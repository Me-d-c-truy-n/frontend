import { useEffect } from 'react'
import TitleTab from './TitleTab';

interface Props {
  id: string;
  title: string;
  name?: string;
}

const TitleTabScroll = ({ id, title, name }: Props) => {
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
      />
    </div>
  )
}

export default TitleTabScroll