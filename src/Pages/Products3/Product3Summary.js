import React from "react";

const Product3Summary = ({ singleProduct3 }) => {
  return (
    <div className="container mt-3 lh-1">
      <p>"{singleProduct3?.nameB}" বইটি সম্পর্কে কিছু কথা :</p>
      <p>{singleProduct3?.descriptionB ? singleProduct3?.descriptionB : ""}</p>
    </div>
  );
};

export default Product3Summary;
