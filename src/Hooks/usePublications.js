import { useQuery } from "react-query";

const usePublications = () => {
  const {
    data: publications,
    isLoading,
    refetch,
  } = useQuery(["publications"], () =>
    fetch("https://book-collection-server.vercel.app/api/v1/publication", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [publications, refetch, isLoading];
};

export default usePublications;
