import { useEffect, useState } from "react";

const useProduct5 = () =>{
    const [myProducts5, setProducts5] = useState([]);

useEffect(() =>{
     fetch('https://book-collection-zs5k.onrender.com/admission')
    .then(res =>res.json())
    .then(data => setProducts5(data));
},[])
return [myProducts5, setProducts5];
}
export default useProduct5;