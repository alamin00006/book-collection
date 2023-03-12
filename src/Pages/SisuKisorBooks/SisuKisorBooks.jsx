import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

const SisuKisorBooks = ({ AddToCarts }) => {
  const [myProducts3, refetch] = useProduct3();
  const [sisuKisorBooks, setSisoKisorBooks] = useState([]);
  useEffect(() => {
    const sisuBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "শিশু-কিশোর বই"
    );
    setSisoKisorBooks(() => sisuBook);
    refetch();
  }, [myProducts3, refetch]);

  console.log(sisuKisorBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const allSisuBookId = (_id) => {
    navigate(`/all-sisu-books/${_id}`);
  };

  return (
    <div className="container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0">শিশু-কিশোর বই</h4>
        <div className="text-center">
          {" "}
          <h6
            onClick={() =>
              allSisuBookId(sisuKisorBooks?.[0]?.category?.category_id)
            }
            className="my-button text-black"
          >
            আরও দেখুন
          </h6>
        </div>
      </div>
      <div className="my-card-main my-card">
        {sisuKisorBooks?.map((data, index) => (
          <Cart key={data._id} data={data} AddToCarts={AddToCarts}></Cart>
        ))}
      </div>
    </div>
  );
};

export default SisuKisorBooks;
