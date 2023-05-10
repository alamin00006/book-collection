import React from "react";
import { useNavigate } from "react-router-dom";
import "../Categorys/Category.css";

import useWriters from "../../Hooks/useWriters";

const Writers = () => {
  const [writers] = useWriters();
  const navigate = useNavigate();
  const writerDetails = (_id) => {
    navigate(`/writer/${_id}`);
  };
  return (
    <div className="bg-white">
      <div className="container product-related-info">
        <div className="row mt-2 g-2">
          {writers?.data?.map((writer) => (
            <div key={writer._id} className="col-lg-3 col-md-4 col-sm-6">
              <h5
                onClick={() => writerDetails(writer._id)}
                className="category-list px-5 py-2 d-flex justify-content-center align-items-center"
              >
                {writer.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writers;
