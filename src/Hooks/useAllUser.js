import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const useAllUser = () => {
  const [allUser, setAllUser] = useState([]);

  const { isLoading, refetch } = useQuery(["allUser"], () => {
    async function getAllUser() {
      await axios
        .get("https://book-collection-server.vercel.app/api/v1/user")
        .then((data) => setAllUser(data))
        .catch((err) => {
          console.log(err);
        });
    }
    getAllUser();
  });
  return [allUser, refetch, isLoading];
};
export default useAllUser;
