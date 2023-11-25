import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCarts = () => {
  const AxiosBaseURL = useAxios();
  const { user, loading } = useAuth();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await AxiosBaseURL.get(`/api/v1/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return { carts, refetch };
};

export default useCarts;
