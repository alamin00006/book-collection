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
      className=" offCanvas-navbar p-0 "
      style={{ backgroundColor: "trasparent" }}
    >
      <Navbar expand={false} className=" mb-3 ">
        <Container fluid>
          {/* <Navbar.Brand as={Link} to="/" className="text-white">
            Home
          </Navbar.Brand> */}
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
              আবিয়ান
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
                <Link
                  to="/writer"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  লেখক
                </Link>
                <Link
                  to="/category"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  বিষয়
                </Link>
                <Link
                  to="/publication"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  প্রকাশনী
                </Link>
                <Link
                  to="/up-comming-book"
                  className="navbar-brand text-black text-decorarion-none"
                >
                  বইমেলা
                </Link>

          
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
