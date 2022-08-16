import { useEffect, useState } from "react";

const useProduct = () =>{
    const [myProducts, setProducts] = useState([]);

useEffect(() =>{
     fetch('data.json')
    .then(res =>res.json())
    .then(data => setProducts(data));
},[])
return [myProducts, setProducts];
}
export default useProduct;