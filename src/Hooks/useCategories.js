import { useEffect, useState } from "react";
// import axios from 'axios';
const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://book-server-sg0u.onrender.com/api/v1/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return [categories, setCategories];
};

export default useCategories;
