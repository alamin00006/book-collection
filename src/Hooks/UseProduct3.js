import { useQuery } from "react-query";
// import useUser from "./useUser";

const useProduct3 = () => {
  // const [allOrder, setAllOrder] = useState([]);
  const {
    data: myProducts3,
    isLoading,
    refetch,
  } = useQuery("myProducts3", () =>
    fetch("https://book-server-sg0u.onrender.com/api/v1/product", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [myProducts3, refetch, isLoading];
};

export default useProduct3;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import useUser from "./useUser";

// const useProduct3 = () =>{
//     const [myProducts3, setProducts3] = useState([]);
//     const [user] = useUser()
//     const token = localStorage.getItem("token");
// useEffect(() =>{
//      fetch('https://book-server-sg0u.onrender.com/api/v1/product')
//     .then(res =>res.json())
//     .then(data => setProducts3(data));
// },[user,token])
// return [myProducts3, setProducts3];

// }

// export default useProduct3;
