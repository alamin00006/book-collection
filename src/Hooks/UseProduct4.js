import { useEffect, useState } from "react";

const useProduct4 = () =>{
    const [myProducts4, setProducts4] = useState([]);

useEffect(() =>{
     fetch('data2.json')
    .then(res =>res.json())
    .then(data => setProducts4(data));
},[])
return [myProducts4, setProducts4];
}
export default useProduct4;