import React, { useEffect, useState } from "react";

const IslamicBook = ({ islamicBook }) => {
  const [myProducts2, setProducts2] = useState([]);

  useEffect(() => {
    fetch("https://book-server-sg0u.onrender.com/islamicBook")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((islamic) => {
          return islamic.category === islamicBook;
        });
        setProducts2(result);
      });
  }, [islamicBook]);
  return (
    <div className="container">
      <h1>Comming Soon{myProducts2.length}</h1>
    </div>
  );
};

export default IslamicBook;
