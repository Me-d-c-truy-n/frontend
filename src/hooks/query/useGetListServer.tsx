import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useLocation } from "react-router-dom";
import { ApiGetAllServer } from "../../api/apiPlugin";
import { updateListServer } from "../../store/server";
import { useQuery } from "@tanstack/react-query";

const useGetListServer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { isLoading, isError, refetch } = useQuery({
    queryKey: ["server", location.pathname],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();

      if (data.length === 0) throw new Error();
      dispatch(updateListServer(data));

      return data;
    },
    retry: 0,
  });

  return { isLoading, isError, refetch };
};

export default useGetListServer;
