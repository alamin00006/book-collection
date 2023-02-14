import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useUser from "./useUser";

const useProduct3 = () =>{
    const [myProducts3, setProducts3] = useState([]);
    const [user] = useUser()
    const token = localStorage.getItem("token");
useEffect(() =>{
     fetch('http://localhost:5000/api/v1/product')
    .then(res =>res.json())
    .then(data => setProducts3(data));
},[user,token])
return [myProducts3, setProducts3];

}

export default useProduct3;

