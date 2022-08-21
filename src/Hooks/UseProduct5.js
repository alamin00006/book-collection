import { useEffect, useState } from "react";

const useProduct5 = () =>{
    const [myProducts5, setProducts5] = useState([]);

useEffect(() =>{
     fetch('data2.json')
    .then(res =>res.json())
    .then(data => setProducts5(data));
},[])
return [myProducts5, setProducts5];
}
export default useProduct5;