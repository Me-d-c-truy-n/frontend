import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom"
import { AppDispatch } from "../store";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllServer } from "../api/apiPlugin";
import { addNewServer } from "../store/server";
import LoadingSpinner from "../components/Loading/LoadingSpinner";

const CheckNewServer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useQuery({
    queryKey: ['server'],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();

      dispatch(addNewServer(data));

      return data;
    },
    retry: 1
  })
  
  if (isLoading) return <LoadingSpinner/>;

  return <Outlet/>
}

export default CheckNewServer