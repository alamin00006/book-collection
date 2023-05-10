import { useQuery } from "react-query";

const useAllOrder = () => {
  const {
    data: allOrder,
    isLoading,
    refetch,
  } = useQuery(["allOrder"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/order", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [allOrder, refetch, isLoading];
};

export default useAllOrder;
