import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "react-query";
import { StarIcon } from "@heroicons/react/24/solid";
import "./Reviews.css";
import { toast, ToastContainer } from "react-toastify";
import reviewPerson from "../../Images/person-review.png";
import useUser from "../../Hooks/useUser";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const Reviews = ({ singleProduct3, approvedReviews, setReview }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const [user] = useUser();
  // const [reviews, setReview] = useState([]);
  // const [filterReviews, setFilterReviews] = useState([]);
  // console.log(user?.email)
  const { isLoading, refetch } = useQuery([singleProduct3], () =>
    fetch(`https://book-collection-server.vercel.app/api/v1/review`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // Navigate('/');
          // signOut(auth);
          // localStorage.removeItem('accessToken')
        }
        return res.json();
      })
      .then((data) => {
        setReview(data.data);
        // console.log(data.data)
      })
  );
  const productReviews = approvedReviews.filter(
    (pReview) => pReview.forProduct === singleProduct3?._id
  );
  // console.log(productReviews)

  const handleClick = (value) => {
    setCurrentValue(value);
    // console.log(value)
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      forProduct: singleProduct3._id,
      rating: currentValue || hoverValue,
      comment: e.target.comment?.value,
      name: e.target.name?.value,
    };

    if (reviewData.rating === undefined) {
      return toast.error("please Give a Rating Number");
    }

    try {
      const data = await axios.post(
        "https://book-collection-server.vercel.app/api/v1/review",
        reviewData
      );

      if (data.status === 400) {
        // return toast.error(data.data.error)
      }

      toast.success(data.data.message);
    } catch (error) {
      // return(error.message)
    }

    e.target.reset();
  };

  refetch();

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h5 className="mt-4">ক্রেতার পর্যালোচনা</h5>
        {productReviews.map((pReview) => (
          <div key={pReview._id} className="mt-4">
            <span>
              {pReview?.rating === 5 ? (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex review-img">
                      <div>
                        <img src={reviewPerson} alt="" />
                      </div>
                      <div className="ms-3">{pReview?.name}</div>
                    </div>
                    <div>
                      <StarIcon className="starIcon-5" />
                      <StarIcon className="starIcon-5" />
                      <StarIcon className="starIcon-5" />
                      <StarIcon className="starIcon-5" />
                      <StarIcon className="starIcon-5" />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {pReview?.rating === 4 ? (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex review-img">
                      <div>
                        <img src={reviewPerson} alt="" />
                      </div>
                      <div className="ms-3">{pReview?.name}</div>
                    </div>
                    <div>
                      <StarIcon className="starIcon-4" />
                      <StarIcon className="starIcon-4" />
                      <StarIcon className="starIcon-4" />
                      <StarIcon className="starIcon-4" />
                      <StarIcon className="starIcon-4-count" />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {pReview?.rating === 3 ? (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex review-img">
                      <div>
                        <img src={reviewPerson} alt="" />
                      </div>
                      <div className="ms-3">{pReview?.name}</div>
                    </div>
                    <div>
                      <StarIcon className="starIcon-3" />
                      <StarIcon className="starIcon-3" />
                      <StarIcon className="starIcon-3" />
                      <StarIcon className="starIcon-3-count" />
                      <StarIcon className="starIcon-3-count" />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {pReview?.rating === 2 ? (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex review-img">
                      <div>
                        <img src={reviewPerson} alt="" />
                      </div>
                      <div className="ms-3">{pReview?.name}</div>
                    </div>
                    <div>
                      <StarIcon className="starIcon-2" />
                      <StarIcon className="starIcon-2" />
                      <StarIcon className="starIcon-2-count" />
                      <StarIcon className="starIcon-2-count" />
                      <StarIcon className="starIcon-2-count" />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {pReview?.rating === 1 ? (
                <>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex review-img">
                      <div>
                        <img src={reviewPerson} alt="" />
                      </div>
                      <div className="ms-3">{pReview?.name}</div>
                    </div>
                    <div>
                      <StarIcon className="starIcon-1" />
                      <StarIcon className="starIcon-1-count" />
                      <StarIcon className="starIcon-1-count" />
                      <StarIcon className="starIcon-1-count" />
                      <StarIcon className="starIcon-1-count" />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </span>
            <div className="review-comment">
              <p>{pReview.comment}</p>
            </div>
          </div>
        ))}
        {user?.email ? (
          <>
            <hr className="mt-5" />
            <p>রিভিউ লিখুন</p>
            <div className="d-flex align-items-center">
              <div>
                <span className="text-danger fw-bolder">
                  রেটিং নির্বাচন করুন
                </span>
              </div>
              <div style={styles.stars} className="ms-2">
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={20}
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                      color={
                        (hoverValue || currentValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={() => handleMouseLeave}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mt-3">
                <form onSubmit={handleReviewSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      style={styles.input}
                    />
                  </div>
                  <div>
                    <textarea
                      name="comment"
                      placeholder="What's your experience?"
                      style={styles.textarea}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <div>
                      <input
                        type="submit"
                        style={styles.button}
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12"></div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "5px 0",
    width: "100%",
  },
  input: {
    width: "100%",
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    backgroundColor: "#000",
    color: "white",
    padding: "2px 15px",
    fontWeight: 700,
  },
};
export default Reviews;
