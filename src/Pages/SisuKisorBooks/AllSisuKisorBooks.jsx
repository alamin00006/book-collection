import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Loading from "../Loading/Loading";
import NoSlideCart from "../AddToCart/NoSlideCart";

const AllSisuKisorBooks = () => {
  const [myProducts3] = useProduct3();
  const { sisuId } = useParams();

  const [allSisuBooks, setAllSisuBooks] = useState({});

  const { isLoading, refetch } = useQuery([myProducts3, sisuId], () =>
    fetch(
      `https://book-collection-server.vercel.app/api/v1/category/${sisuId}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // Navigate('/');
        }
        return res.json();
      })
      .then((data) => {
        setAllSisuBooks(data?.data);
        refetch();
      })
  );
  if (!allSisuBooks || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-white">
      <div className="custom-container border">
        <h4 className="bg-white p-3"> শিশু-কিশোর বইসমূহ</h4>

        <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
          <div className="p-5">
            {allSisuBooks?.products?.length > 0 ? (
              <>
                <h4> মোট {allSisuBooks?.products?.length} টি বই পাওয়া গেছে</h4>
              </>
            ) : (
              <h4> কোন বই খুঁজে পাওয়া যায়নি</h4>
            )}
          </div>
        </div>

        <div className="my-card-main my-card mt-2">
          {allSisuBooks?.products?.slice(0, 20).map((data, index) => (
            <NoSlideCart key={data._id} data={data}></NoSlideCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSisuKisorBooks;
