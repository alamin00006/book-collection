import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import useBookFairs from "../../Hooks/useBookFair";
import usePublications from "../../Hooks/usePublications";
import useWriters from "../../Hooks/useWriters";

const OffCanvasNavbar = () => {
  const [categories, refetch] = useCategories();
  const [bookfairs] = useBookFairs();
  const [publications] = usePublications();
  const [writers] = useWriters();
  return (
    <div className="container offCanvas-navbar">
      <Navbar bg="light" expand={false} className="container mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Nafiuen</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Nafiuen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  to="/"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  হোম
                </Link>

                <NavDropdown
                  title="লেখক"
                  id={`offcanvasNavbarDropdown-expand-false`}
                  className="border-none"
                >
                  {writers?.data?.slice(0, 8).map((writer) => (
                    <NavDropdown.Item as={Link} to={`/writer/${writer._id}`}>
                      {writer.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default OffCanvasNavbar;
