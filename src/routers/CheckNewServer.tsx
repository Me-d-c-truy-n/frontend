import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { AppDispatch } from "../store";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllServer } from "../api/apiPlugin";
import { updateListServer } from "../store/server";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { toast } from "react-toastify";

const CheckNewServer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { isLoading, isError } = useQuery({
    queryKey: ["server", location.pathname],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();

      if (data.length === 0) throw new Error();

      dispatch(updateListServer(data));

      return data;
    },
    retry: 0,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    dispatch(updateListServer([]));
    toast.error("Không thể tải nguồn truyền");
  }

  return <Outlet />;
};

export default CheckNewServer;
