import { Outlet } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllServer } from "../api/apiPlugin";
import { addNewServer } from "../stores/serverStore";

const CheckNewServer = () => {

  const { isLoading } = useQuery({
    queryKey: ['server'],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();

      addNewServer(data);

      return data;
    },
    retry: 1
  })
  
  if (isLoading) return <div>Loading....</div>

  return <Outlet/>
}

export default CheckNewServer