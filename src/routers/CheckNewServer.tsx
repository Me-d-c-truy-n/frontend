import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllServer } from "../api/apiPlugin";
import { updateListServer } from "../store/server";
import LoadingSpinner from "../components/Loading/LoadingSpinner";

const CheckNewServer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, isError } = useQuery({
    queryKey: ["server"],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();

      if (data.length === 0) throw new Error();

      dispatch(updateListServer(data));

      return data;
    },
    retry: 1,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    navigate("/notfound", {
      replace: true,
    });

  return <Outlet />;
};

export default CheckNewServer;
