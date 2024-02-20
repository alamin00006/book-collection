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
import LIneIcon from "../../svgIcons/LIneIcon";
import "./OffCanvasNavbar.css";

const OffCanvasNavbar = () => {
  const [categories, refetch] = useCategories();
  const [bookfairs] = useBookFairs();
  const [publications] = usePublications();
  const [writers] = useWriters();
  return (
    <div
      className="custom-container offCanvas-navbar p-0"
      style={{ backgroundColor: "#065644" }}
    >
      <Navbar expand={false} className="custom-container mb-3 ">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <LIneIcon />
          </Navbar.Toggle>
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
                  className="offCanvasDrop-down"
                >
                  {writers?.data?.slice(0, 20).map((writer) => (
                    <NavDropdown.Item as={Link} to={`/writer/${writer._id}`}>
                      {writer.name}
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Item as={Link} to="/writer">
                    আরো দেখুন...
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="বিষয়"
                  id={`offcanvasNavbarDropdown-expand-false`}
                  className="offCanvasDrop-down"
                >
                  {categories?.data?.slice(0, 20).map((category) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/category/${category._id}`}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Item as={Link} to="/category">
                    আরো দেখুন...
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="প্রকাশনী"
                  id={`offcanvasNavbarDropdown-expand-false`}
                  className="offCanvasDrop-down"
                >
                  {publications?.data?.slice(0, 20).map((publication) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/publication/${publication._id}`}
                    >
                      {publication.name}
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Item as={Link} to="/publication">
                    আরো দেখুন...
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="বইমেলা"
                  id={`offcanvasNavbarDropdown-expand-false`}
                  className="offCanvasDrop-down"
                >
                  {bookfairs?.data?.slice(0, 20).map((bookFair) => (
                    <NavDropdown.Item as={Link} to="/up-comming">
                      {bookFair.bookFairYear}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  উপন্যাস
                </Link>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  বেস্টসেলার বই
                </Link>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  ইঞ্জিনিয়ারিং
                </Link>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  ইসলামিক বই
                </Link>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  প্রি-অর্ডার
                </Link>
                <Link
                  to="//up-comming"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  অতিরিক্ত ছাড়ের বই
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default OffCanvasNavbar;
