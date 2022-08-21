import { useEffect, useState } from "react";

const useProduct6 = () =>{
    const [myProducts6, setProducts6] = useState([]);

useEffect(() =>{
     fetch('data2.json')
    .then(res =>res.json())
    .then(data => setProducts6(data));
},[])
return [myProducts6, setProducts6];
}
export default useProduct6;