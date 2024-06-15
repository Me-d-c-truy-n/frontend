import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { updateListServer } from "../store/server";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { toast } from "react-toastify";
import useGetListServer from "../hooks/query/useGetListServer";

const CheckNewServer = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isError } = useGetListServer();
  const dispatch = useDispatch<AppDispatch>();
  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    dispatch(updateListServer([]));
    toast.error("Không có nguồn truyện nào");
  }

  return children;
};

export default CheckNewServer;
