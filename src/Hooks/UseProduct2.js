import { useEffect, useState } from "react";

const useProduct2 = () =>{
    const [myProducts2, setProducts2] = useState([]);

useEffect(() =>{
     fetch('http://localhost:5000/uposohokari')
    .then(res =>res.json())
    .then(data => setProducts2(data));
},[])
return [myProducts2, setProducts2];
}
export default useProduct2;