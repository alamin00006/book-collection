import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Cart from "../AddToCart/Cart";

const WriterDetails = () => {
  const { writerDetailsId } = useParams();
  const [writerDetails, setWriterDetails] = useState({});

  const { isLoading, refetch } = useQuery([writerDetailsId], () =>
    fetch(
      `https://book-collection-server.vercel.app/api/v1/writer/${writerDetailsId}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // Navigate('/');
          // signOut(auth);
          // localStorage.removeItem('accessToken')
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setWriterDetails(data.data);
      })
  );
  return (
    <div className="container bg-white">
      <h4 className="bg-white p-3">{writerDetails.name} বইসমূহ</h4>
      <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
        <div className="p-5">
          <h2>{writerDetails.name}</h2>
          {writerDetails?.products?.length > 0 ? (
            <>
              <h4>
                {writerDetails.name} প্রকাশিত মোট{" "}
                {writerDetails?.products?.length} টি বই পাচ্ছেন আমাদের কাছে
              </h4>
            </>
          ) : (
            <h4>{writerDetails.name} প্রকাশিত কোন বই খুঁজে পাওয়া যায়নি</h4>
          )}
        </div>
      </div>
      <div className="my-card-main my-card">
        {writerDetails?.products?.map((data, index) => (
          <Cart key={data._id} data={data}></Cart>
        ))}
      </div>
    </div>
  );
};

export default WriterDetails;
