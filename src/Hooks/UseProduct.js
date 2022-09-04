import { useEffect, useState } from "react";

const useProduct = () =>{
    const [myProducts, setProducts] = useState([]);

useEffect(() =>{
     fetch('http://localhost:5000/bestseller')
    .then(res =>res.json())
    .then(data => setProducts(data));
},[])
return [myProducts, setProducts];
}
export default useProduct;