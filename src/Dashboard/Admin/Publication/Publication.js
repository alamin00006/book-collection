import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import PublicationTable from "./PublicationTable";
import PublicationEditModal from "./PublicationEditModal";

const Publication = () => {
  const [publications, setpublications] = useState();

  const [publicationEdit, setPublicationEdit] = useState(null);
  const handleShowEditPublication = () => setShow(true);
  const [show, setShow] = useState(false);

  // Get Publications

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { refetch, isLoading } = useQuery(
    ["publications", page, publications, pageCount, publicationEdit],
    () =>
      fetch(
        `http://localhost:5000/api/v1/publication?page=${page}&size=${10}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setpublications(data?.data?.publications);

          const totalPageCount = Math.ceil(
            data?.data?.PublicationTotalCount / 10
          );
          setPageCount(totalPageCount);
        })
  );
  const handlePublicationAdd = async (e) => {
    e.preventDefault();
    const publicationAdd = {
      name: e.target.publicationName.value,
    };

    try {
      const data = await axios.post(
        "https://book-server-sg0u.onrender.com/api/v1/publication",
        publicationAdd
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }

    e.target.reset();
  };

  return (
    <>
      <div className="product-info ">
        <h2 className="text-center p-5 text-white">Publication Manage</h2>
        <form onSubmit={handlePublicationAdd} className="category-form">
          <div className="">
            <div>
              <input
                style={{
                  width: "100%",
                  height: "60px",
                  border: "1px solid gray",
                }}
                type="text"
                name="publicationName"
                className="rounded fs-5"
                placeholder="Enter Publication Name in Bangla"
              />
              <input
                style={{ width: "100%", height: "60px" }}
                className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
                type="submit"
                value="Publication Add"
              />
            </div>
          </div>
        </form>
      </div>

      <Table striped bordered hover={false} size="lg" responsive>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Publication Name</th>
            <th>This Publication Product in Your Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {publications?.map((publication, index) => (
            <PublicationTable
              publication={publication}
              index={index}
              refetch={refetch}
              setPublicationEdit={setPublicationEdit}
              handleShowEditPublication={handleShowEditPublication}
            />
          ))}
          <ToastContainer className="toast-position" position="top-center" />
        </tbody>
      </Table>
      <div className="pagination d-flex justify-content-end">
        {[...Array(pageCount).keys()].map((number, index) => (
          <div key={index}>
            <button
              onClick={() => setPage(number)}
              className={page === number ? "page-selected" : ""}
            >
              {number + 1}
            </button>
          </div>
        ))}
      </div>
      <PublicationEditModal
        publicationEdit={publicationEdit}
        show={show}
        setShow={setShow}
        refetch={refetch}
      />
    </>
  );
};

export default Publication;
