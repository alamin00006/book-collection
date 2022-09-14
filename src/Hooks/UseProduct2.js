import { useEffect, useState } from "react";

const useProduct2 = () =>{
    const [myProducts2, setProducts2] = useState([]);

useEffect(() =>{
     fetch('https://book-collection-zs5k.onrender.com/uposohokari')
    .then(res =>res.json())
    .then(data => setProducts2(data));
},[])
return [myProducts2, setProducts2];
}
export default useProduct2;