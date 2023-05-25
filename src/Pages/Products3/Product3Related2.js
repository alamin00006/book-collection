import React from "react";

const Product3Related2 = ({ relatedProduct }) => {
  return (
    <div id="demo" class="carousel slide mt-3" data-bs-ride="carousel">
      <div class="carousel-indicators carousel-director">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div class="carousel-inner">
        {relatedProduct?.slice(0, 3).map((data, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-flex related-slider-1">
              <div>
                <img
                  style={{ width: "100px" }}
                  src={data?.image}
                  alt="Los Angeles"
                  class="d-block"
                />
              </div>
              <div className="ms-3">
                <p>{data.nameB}</p>
                <p>{data.writer.writerName}</p>
                <h5>
                  TK.
                  {data.discount
                    ? parseFloat(
                        data.price -
                          Math.ceil((data.price / 100) * data.discount).toFixed(
                            2
                          )
                      )
                    : data.price}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product3Related2;
