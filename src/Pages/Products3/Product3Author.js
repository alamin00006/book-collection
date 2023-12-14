import React from "react";
import author from "../../Images/author.jpg";
const Product3Author = ({ singleProduct3 }) => {
  return (
    <div className="d-flex mt-3 align-items-center">
      <div>
        <img src={author} alt="Author" />
      </div>
      <div>
        <h3 className="ms-3">{singleProduct3?.writer?.writerName}</h3>
        <p className="ms-3">{singleProduct3?.writer?.writerDetails}</p>
      </div>
    </div>
  );
};

export default Product3Author;
