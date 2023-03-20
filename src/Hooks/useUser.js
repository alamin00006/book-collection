import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useUser = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  //     useEffect(() =>{
  //     async function userFetch(){
  //      await fetch('https://book-server-sg0u.onrender.com/api/v1/user/me',{
  //         headers: {
  //           Authorization : `Bearer ${token}`
  //           },
  //       })
  //      .then(res =>res.json())
  //      .then(data => setUser(data));
  //     }
  //     userFetch()
  //  },[user,token])
  //  return [user];
  const { isLoading, refetch } = useQuery(["user", token], () => {
    async function getUser() {
      if (!token) {
        return;
      } else {
        await axios
          .get(
            "https://book-server-sg0u.onrender.com/api/v1/user/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
            {
              refetchInterval: 6000,
            }
          )
          .then((data) => setUser(data?.data?.data))
          .catch((err) => {});
      }
    }
    getUser();
  });
  return [user, refetch, isLoading];
  // const { isLoading } = useQuery(
  //   "data",
  //   async () => {
  //     const { data } = await axios.get(
  //       "https://book-server-sg0u.onrender.com/api/v1/user/me",{
  //         headers: {
  //                     Authorization : `Bearer ${token}`
  //                   },
  //       }

  //     );
  //     return setUser(data?.data);
  //   },
  //   {
  //     refetchInterval: 6000
  //   }
  // );
  // return [user, isLoading]
};
export default useUser;
