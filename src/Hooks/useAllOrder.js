import { useQuery } from "react-query";
// import useUser from "./useUser";

const useAllOrder = () =>{
    // const [allOrder, setAllOrder] = useState([]);
    const {data: allOrder, isLoading, refetch} = useQuery('allOrder', () => fetch('http://localhost:5000/api/v1/order', {
        method: "GET",
    }).then(res =>res.json()))
  
return [allOrder, refetch,isLoading];

}

export default useAllOrder;








// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import useUser from "./useUser";

// const useAllOrder = () =>{
//     const [allOrder, setAllOrder] = useState([]);
//     const [user] = useUser()
//     const token = localStorage.getItem("token");
// useEffect(() =>{
//      fetch('http://localhost:5000/api/v1/order')
//     .then(res =>res.json())
//     .then(data => setAllOrder(data));
// },[user,token])
// return [allOrder, setAllOrder];

// }

// export default useAllOrder;

