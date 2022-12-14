import { useEffect, useState } from "react";

const useProduct6 = () =>{
    const [myProducts6, setProducts6] = useState([]);

useEffect(() =>{
     fetch('https://book-collection-zs5k.onrender.com/treadCourse')
    .then(res =>res.json())
    .then(data => setProducts6(data));
},[])
return [myProducts6, setProducts6];
}
export default useProduct6;