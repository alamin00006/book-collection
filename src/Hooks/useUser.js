import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const useUser = ()=>{
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");
    // useEffect(() => {
       
        // if(!token){
        //   return;
        // }else{
        //   axios
        //   .get("http://localhost:5000/api/v1/user/me", {
        //     headers: {
        //       Authorization : `Bearer ${token}`
        //     },
        //   })
        //   .then((data) => setUser(data?.data?.data))
        //   .catch((err) => {
            
        //   });
        // }
        
    //   }, [token]);
    const { isLoading, refetch} = useQuery([token ], () => {
      if(!token){
        return;
      }else{
        axios
        .get("http://localhost:5000/api/v1/user/me", {
          headers: {
            Authorization : `Bearer ${token}`
          },
        })
        .then((data) => setUser(data?.data?.data))
        .catch((err) => {
          
        });
      }
    })
    return [user, refetch]
}
export default useUser;