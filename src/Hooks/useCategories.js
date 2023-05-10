import { useQuery } from "react-query";

const useCategories = () => {
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery(["categories"], () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/category", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [categories, refetch, isLoading];
};

export default useCategories;
