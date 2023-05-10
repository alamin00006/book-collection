import { useQuery } from "react-query";

const useBanner = () => {
  const {
    data: allBanner,
    isLoading,
    refetch,
  } = useQuery(["allBanner"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/banner", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [allBanner, refetch, isLoading];
};

export default useBanner;
