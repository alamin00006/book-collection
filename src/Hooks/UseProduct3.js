import { useEffect, useState } from "react";

const useProduct3 = () =>{
    const [myProducts3, setProducts3] = useState([]);

useEffect(() =>{
     fetch('https://book-collection-zs5k.onrender.com/nonTech')
    .then(res =>res.json())
    .then(data => setProducts3(data));
},[])
return [myProducts3, setProducts3];
}
export default useProduct3;