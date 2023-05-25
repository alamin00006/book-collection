import { useQuery } from "react-query";
// import useUser from "./useUser";

const useProduct3 = () => {
  // const [allOrder, setAllOrder] = useState([]);
  const {
    data: myProducts3,
    isLoading,
    refetch,
  } = useQuery("myProducts3", () =>
    fetch("https://book-collection-server.vercel.app/api/v1/product", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [myProducts3, refetch, isLoading];
};

export default useProduct3;
