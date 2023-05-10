import { useQuery } from "react-query";

const useBookFairs = () => {
  const {
    data: bookfairs,
    isLoading,
    refetch,
  } = useQuery(["bookfairs"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/book-fair", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [bookfairs, refetch, isLoading];
};

export default useBookFairs;
