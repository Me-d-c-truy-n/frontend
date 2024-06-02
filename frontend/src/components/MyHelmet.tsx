import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
}

const MyHelmet = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </Helmet>
  )
}

export default MyHelmet