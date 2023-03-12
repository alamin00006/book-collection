import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

const DormioBooks = ({ AddToCarts }) => {
  const [myProducts3, refetch] = useProduct3();
  const [dormioBooks, setDormioBooks] = useState([]);
  useEffect(() => {
    const dormioBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "ধর্মীয় বই"
    );
    setDormioBooks(() => dormioBook);
    refetch();
  }, [myProducts3, refetch]);

  console.log(dormioBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const allIslamicBookId = (_id) => {
    navigate(`/all-dormio-books/${_id}`);
  };

  return (
    <div className="container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0">ধর্মীয় বই</h4>
        <div className="text-center">
          {" "}
          <h6
            onClick={() =>
              allIslamicBookId(dormioBooks?.[0]?.category?.category_id)
            }
            className="my-button text-black"
          >
            আরও দেখুন
          </h6>
        </div>
      </div>
      <div className="my-card-main my-card">
        {dormioBooks?.map((data, index) => (
          <Cart key={data._id} data={data} AddToCarts={AddToCarts}></Cart>
        ))}
      </div>
    </div>
  );
};

export default DormioBooks;
