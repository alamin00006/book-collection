import { useEffect, useState } from "react";

const useProduct3 = () =>{
    const [myProducts3, setProducts3] = useState([]);

useEffect(() =>{
     fetch('http://localhost:5000/api/v1/product')
    .then(res =>res.json())
    .then(data => setProducts3(data));
},[])
return [myProducts3, setProducts3];
}

export default useProduct3;

