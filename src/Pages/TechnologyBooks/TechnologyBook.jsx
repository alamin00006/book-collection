import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

const TechnologyBook = ({ AddToCarts }) => {
  const [myProducts3, refetch] = useProduct3();
  const [technologyBooks, setTechnolgoyBooks] = useState([]);
  useEffect(() => {
    const techonologyBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "টেকনোলজি বই"
    );
    setTechnolgoyBooks(() => techonologyBook);
    refetch();
  }, [myProducts3, refetch]);

  console.log(technologyBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const alltechnologyBookId = (_id) => {
    navigate(`/all-technology-books/${_id}`);
  };

  return (
    <div className="container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0">টেকনোলজি বই</h4>
        <div className="text-center">
          {" "}
          <h6
            onClick={() =>
              alltechnologyBookId(technologyBooks?.[0]?.category?.category_id)
            }
            className="my-button text-black"
          >
            আরও দেখুন
          </h6>
        </div>
      </div>
      <div className="my-card-main my-card">
        {technologyBooks?.map((data, index) => (
          <Cart key={data._id} data={data} AddToCarts={AddToCarts}></Cart>
        ))}
      </div>
    </div>
  );
};

export default TechnologyBook;
