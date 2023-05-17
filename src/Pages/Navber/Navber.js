import React from "react";

import { Link, useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import "../Navber/Navber.css";
import useBookFairs from "../../Hooks/useBookFair";
import usePublications from "../../Hooks/usePublications";
import useWriters from "../../Hooks/useWriters";
import { Navbar } from "react-bootstrap";
import LIneIcon from "../../svgIcons/LIneIcon";

const Navber = () => {
  const [categories, refetch] = useCategories();
  const [bookfairs] = useBookFairs();
  const [publications] = usePublications();
  const [writers] = useWriters();

  return (
    <div className="container main-Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white text-decorarion-none">
            হোম
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <LIneIcon />
            </Navbar.Toggle>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <span className="subject-link subject-link2 dropdown-toggle pb-4">
                  লেখক
                </span>
                <div className="dropdown-menu">
                  <div className="drop-list-1">
                    <div className="d-flex">
                      <ul>
                        {writers?.data?.slice(0, 8).map((writer) => (
                          <li key={writer._id}>
                            <Link
                              to={`/writer/${writer._id}`}
                              className="dropdown-item"
                            >
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {writers?.data?.slice(8, 15).map((writer) => (
                          <li key={writer._id}>
                            <Link
                              to={`/writer/${writer._id}`}
                              className="dropdown-item"
                            >
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {writers?.data?.slice(15, 22).map((writer) => (
                          <li key={writer._id}>
                            <Link
                              to={`/writer/${writer._id}`}
                              className="dropdown-item"
                            >
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {writers?.data?.slice(22, 28).map((writer) => (
                          <li key={writer._id}>
                            <Link
                              to={`/writer/${writer._id}`}
                              className="dropdown-item"
                            >
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {writers?.data?.slice(28, 34).map((writer) => (
                          <li key={writer._id}>
                            <Link
                              to={`/writer/${writer._id}`}
                              className="dropdown-item"
                            >
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to="/writer" className="dropdown-item">
                            আরো দেখুন...
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <span className="subject-link subject-link2 dropdown-toggle pb-4">
                  বিষয়
                </span>
                <div className="dropdown-menu">
                  <div className="drop-list">
                    <div className="d-flex">
                      <ul>
                        {categories?.data?.slice(0, 8).map((category) => (
                          <li key={category._id}>
                            <Link
                              to={`/category/${category._id}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {categories?.data?.slice(8, 15).map((category) => (
                          <li key={category._id}>
                            <Link
                              to={`/category/${category._id}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {categories?.data?.slice(15, 22).map((category) => (
                          <li key={category._id}>
                            <Link
                              to={`/category/${category._id}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {categories?.data?.slice(22, 28).map((category) => (
                          <li key={category._id}>
                            <Link
                              to={`/category/${category._id}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {categories?.data?.slice(28, 34).map((category) => (
                          <li key={category._id}>
                            <Link
                              to={`/category/${category._id}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to="/category" className="dropdown-item">
                            আরো দেখুন...
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <span className="subject-link subject-link2 dropdown-toggle pb-4">
                  প্রকাশনী
                </span>
                <div className="dropdown-menu">
                  <div className="drop-list-3">
                    <div className="d-flex">
                      <ul>
                        {publications?.data?.slice(0, 7).map((publication) => (
                          <li key={publication._id}>
                            <Link
                              to={`/publication/${publication._id}`}
                              className="dropdown-item"
                            >
                              {publication.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {publications?.data?.slice(7, 14).map((publication) => (
                          <li key={publication._id}>
                            <Link
                              to={`/publication/${publication._id}`}
                              className="dropdown-item"
                            >
                              {publication.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {publications?.data
                          ?.slice(14, 21)
                          .map((publication) => (
                            <li key={publication._id}>
                              <Link
                                to={`/publication/${publication._id}`}
                                className="dropdown-item"
                              >
                                {publication.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                      <ul>
                        {publications?.data
                          ?.slice(21, 27)
                          .map((publication) => (
                            <li key={publication._id}>
                              <Link
                                to={`/publication/${publication._id}`}
                                className="dropdown-item"
                              >
                                {publication.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                      <ul>
                        {publications?.data
                          ?.slice(27, 33)
                          .map((publication) => (
                            <li key={publication._id}>
                              <Link
                                to={`/publication/${publication._id}`}
                                className="dropdown-item"
                              >
                                {publication.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <Link to="/publication" className="dropdown-item">
                            আরো দেখুন...
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <span className="subject-link subject-link2 pb-4 dropdown-toggle book-fair-part">
                  বইমেলা
                </span>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      {bookfairs?.data.map((bookfair) => (
                        <span
                          key={bookfair._id}
                          className="dropdown-item book-fair"
                        >
                          {" "}
                          বইমেলা {bookfair?.bookFairYear}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="subject-link subject-link2 pb-4 text-white"
                  to="/up-comming"
                >
                  উপন্যাস
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="subject-link subject-link2 pb-4 text-white"
                  to="/up-comming"
                >
                  বেস্টসেলার বই
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="subject-link subject-link2 pb-4 text-white"
                  to="/up-comming"
                >
                  ইঞ্জিনিয়ারিং
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/up-comming">
                  {" "}
                  ইসলামিক বই{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/up-comming">
                  {" "}
                  প্রি-অর্ডার{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/up-comming">
                  {" "}
                  অতিরিক্ত ছাড়ের বই{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
