import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Loading from "../Loading/Loading";

const AllTechnolgyBooks = () => {
  const [myProducts3] = useProduct3();
  const { technologyId } = useParams();

  const [allTechnologyBooks, setAllTechnologyBooks] = useState({});

  const { isLoading, refetch } = useQuery([myProducts3, technologyId], () =>
    fetch(
      `https://book-server-sg0u.onrender.com/api/v1/category/${technologyId}`,
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
        setAllTechnologyBooks(data?.data);
        refetch();
      })
  );
  if (!allTechnologyBooks || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-white">
      <div className="container border">
        <h4 className="bg-white p-3"> টেকনোলজি বইসমূহ</h4>

        <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
          <div className="p-5">
            {allTechnologyBooks?.products?.length > 0 ? (
              <>
                <h4>
                  {" "}
                  মোট {allTechnologyBooks?.products?.length} টি বই পাওয়া গেছে
                </h4>
              </>
            ) : (
              <h4> কোন বই খুঁজে পাওয়া যায়নি</h4>
            )}
          </div>
        </div>

        <div className="my-card-main my-card mt-2">
          {allTechnologyBooks?.products?.slice(0, 20).map((data, index) => (
            <Cart key={data._id} data={data}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTechnolgyBooks;
