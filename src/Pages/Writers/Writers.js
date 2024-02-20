import React from "react";
import { useNavigate } from "react-router-dom";
import "../Categorys/Category.css";

import useWriters from "../../Hooks/useWriters";
import Loading from "../Loading/Loading";
import writerIcon from "../../Images/emptywriter.jpg";
import { IoSearch } from "react-icons/io5";

const Writers = () => {
  const [writers, refetch, isLoading] = useWriters();
  const navigate = useNavigate();
  const writerDetails = (_id) => {
    navigate(`/writer/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white custom-container">
      <div className="my-3 ">
        <h3
          style={{
            fontSize: "1.2rem",
          }}
        >
          সকল লেখক
        </h3>
        <div className="search-field2">
          <input
            type="text"
            placeholder="লেখক অনুসন্ধান করুন"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: 0,
            }}
          />
          <span className="search-button2 px-3 ">
            {" "}
            <IoSearch
              className=" font-bold"
              style={{ color: "white", width: "16px", height: "16px" }}
            />
          </span>
        </div>
      </div>
      <div className="writer_list mt-2">
        {writers?.data?.map((writer) => (
          <div key={writer._id} className=" border">
            <div
              className="text-center mb-2"
              onClick={() => writerDetails(writer._id)}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "120px",
                }}
                src={writerIcon}
                alt=""
              />
            </div>
            <h5
              onClick={() => writerDetails(writer._id)}
              className="px-2 py-1 d-flex justify-content-center "
            >
              {writer.name}
            </h5>
            <div className="d-flex justify-content-center mb-2">
              <div>
                <button
                  className="btn border"
                  style={{
                    backgroundColor: "#f29434",
                    color: "white",
                  }}
                  onClick={() => writerDetails(writer._id)}
                >
                  সকল বই
                </button>
                <button
                  className="btn border ms-2"
                  onClick={() => writerDetails(writer._id)}
                >
                  {writer?.products?.length > 0 ? (
                    <span>{`(${writer?.products?.length} টি বই)`}</span>
                  ) : (
                    "0 বই "
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Writers;
