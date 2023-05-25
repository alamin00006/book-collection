import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const WriterEditModal = ({ writerEdit, setShow, show, refetch }) => {
  const handleClose = () => setShow(false);

  const handleWriterUpdate = async (e) => {
    e.preventDefault();
    const writerUpdate = {
      name: e.target.writerName.value,
      writerDetails: e.target.writerDetails.value,
    };
    try {
      const data = await axios.patch(
        `http://localhost:5000/api/v1/writer/${writerEdit?._id}`,
        writerUpdate
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
          <Modal.Title>Writer information Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleWriterUpdate}>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="writerName"
              className="rounded fs-5"
              required
              placeholder="Enter Writer Name in Bangla"
              defaultValue={writerEdit?.name}
            />
            <textarea
              className="rounded fs-5 mt-1 ps-2"
              id="writerDetails"
              name="writerDeatails"
              rows="4"
              placeholder="Enter Writer Details in Bangla"
              defaultValue={writerEdit?.writerDetails}
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#032b22",
              }}
              className=" rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Writer Update"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WriterEditModal;
