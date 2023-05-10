import { useQuery } from "react-query";

const useWriters = () => {
  const {
    data: writers,
    isLoading,
    refetch,
  } = useQuery(["writers"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/writer", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [writers, refetch, isLoading];
};

export default useWriters;
