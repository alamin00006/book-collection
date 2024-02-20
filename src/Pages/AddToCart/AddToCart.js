import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate();

  return (
    <div className="custom-container cart-item-page mt-3">
      <div className="text-center all-cart">
        <div className="bg-warning p-5">
          <h6 className="text-white fs-5 fw-bolder">Your Cart is Empty</h6>
          <button
            className="text-center bg-info text-white border-0 px-5 py-2 fs-5 rounded"
            onClick={() => navigate("/")}
          >
            Continue Shipping
          </button>
        </div>
      </div>
      <div className="row cart-page gx-5">
        <div className="col-lg-8 col-md-8 col-sm-12"></div>
      </div>
    </div>
  );
};

export default AddToCart;
