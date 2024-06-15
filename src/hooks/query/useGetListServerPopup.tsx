import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllServer } from "../../api/apiPlugin";
import { updateListServer } from "../../store/server";

const useGetListServerPopup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { isLoading } = useQuery({
    queryKey: ["server_popup", location.pathname],
    queryFn: async () => {
      const data: string[] = await ApiGetAllServer();
      dispatch(updateListServer(data));

      return data;
    },

    retry: 0,
  });

  return { isLoading };
};

export default useGetListServerPopup;
