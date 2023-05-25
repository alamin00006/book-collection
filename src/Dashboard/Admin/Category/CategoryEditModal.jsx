import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const CategoryEditModal = ({ categoryEdit, setShow, show, refetch }) => {
  const handleClose = () => setShow(false);

  const handleCategoryUpdate = async (e) => {
    e.preventDefault();
    const categoryUpdate = {
      name: e.target.categoryName.value,
    };

    try {
      const data = await axios.patch(
        `http://localhost:5000/api/v1/category/${categoryEdit?._id}`,
        categoryUpdate
      );

      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleCategoryUpdate}>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="categoryName"
              className="rounded fs-5"
              required
              placeholder="Enter Category Name in Bangla"
              defaultValue={categoryEdit?.name}
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#032b22",
              }}
              className=" rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Category Update"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryEditModal;
