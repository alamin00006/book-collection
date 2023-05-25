import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const PublicationEditModal = ({ publicationEdit, setShow, show, refetch }) => {
  const handleClose = () => setShow(false);

  const handlePublicationUpdate = async (e) => {
    e.preventDefault();
    const publicationUpdate = {
      name: e.target.publicationName.value,
    };
    try {
      const data = await axios.patch(
        `https://book-collection-server.vercel.app/api/v1/publication/${publicationEdit?._id}`,
        publicationUpdate
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
          <Modal.Title>Publication information Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlePublicationUpdate}>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="publicationName"
              className="rounded fs-5"
              required
              placeholder="Enter Writer Name in Bangla"
              defaultValue={publicationEdit?.name}
            />

            <input
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#032b22",
              }}
              className=" rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Publication Update"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PublicationEditModal;
