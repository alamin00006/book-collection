import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import WriterTable from "./WriterTable";
import WriterEditModal from "./WriterEditModal";

const WriterAdd = () => {
  const [writers, setWriters] = useState();

  const [writerEdit, setWriterEdit] = useState(null);
  const handleShowEditWriter = () => setShow(true);
  const [show, setShow] = useState(false);

  // Get Writers

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { refetch, isLoading } = useQuery(
    ["writers", page, writers, pageCount, writerEdit],
    () =>
      fetch(
        `https://book-collection-server.vercel.app/api/v1/writer?page=${page}&size=${10}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setWriters(data?.data?.writers);

          const totalPageCount = Math.ceil(data?.data?.WriterTotalCount / 10);
          setPageCount(totalPageCount);
        })
  );

  const handleWriterAdd = async (e) => {
    e.preventDefault();
    const writerAdd = {
      name: e.target.writerName.value,
      writerDetails: e.target.writerDetails.value,
    };

    try {
      const data = await axios.post(
        "https://book-collection-server.vercel.app/api/v1/writer",
        writerAdd
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
        <h2 className="text-center p-5 text-white">Writer Manage</h2>
        <form onSubmit={handleWriterAdd} className="category-form">
          <div className="">
            <div>
              <input
                style={{
                  width: "100%",
                  height: "60px",
                  border: "1px solid gray",
                }}
                type="text"
                name="writerName"
                className="rounded fs-5"
                placeholder="Enter Writer Name in Bangla"
              />
              <textarea
                className="rounded fs-5 mt-1 ps-2"
                id="writerDetails"
                name="writerDeatails"
                rows="4"
                placeholder="Enter Writer Details in Bangla"
              />
              <input
                style={{ width: "100%", height: "60px" }}
                className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
                type="submit"
                value="Writer Add"
              />
            </div>
          </div>
        </form>
      </div>

      <Table striped bordered hover={false} size="lg" responsive>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Writer Name</th>
            <th>Writer Details</th>
            <th>This Writer Product in Your Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {writers?.map((writer, index) => (
            <WriterTable
              writer={writer}
              index={index}
              refetch={refetch}
              setWriterEdit={setWriterEdit}
              handleShowEditWriter={handleShowEditWriter}
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
      <WriterEditModal
        writerEdit={writerEdit}
        show={show}
        setShow={setShow}
        refetch={refetch}
      />
    </>
  );
};

export default WriterAdd;
