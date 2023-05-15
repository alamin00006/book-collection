import { useQuery } from "react-query";

const useCoupon = () => {
  const {
    data: coupons,
    isLoading,
    refetch,
  } = useQuery(["coupons"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/book-fair", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [coupons, refetch, isLoading];
};

export default useCoupon;
