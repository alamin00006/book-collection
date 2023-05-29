import React from "react";
import { useNavigate } from "react-router-dom";
import "../Categorys/Category.css";
import usePublications from "../../Hooks/usePublications";
import Loading from "../Loading/Loading";

const Publications = () => {
  const [publications, refetch, isLoading] = usePublications();
  const navigate = useNavigate();
  const publicationDetails = (_id) => {
    navigate(`/publication/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white">
      <div className="container product-related-info">
        <div className="row mt-2 g-2">
          {publications?.data?.map((publication) => (
            <div key={publication._id} className="col-lg-3 col-md-4 col-sm-6">
              <h5
                onClick={() => publicationDetails(publication._id)}
                className="category-list px-5 py-2 d-flex justify-content-center align-items-center"
              >
                {publication.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
