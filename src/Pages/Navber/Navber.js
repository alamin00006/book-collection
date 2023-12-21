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
    <div>
      <div className="container main-Navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-0">
            <Link
              to="/"
              className="navbar-brand text-decorarion-none text-black"
            >
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
            <div
              className="collapse navbar-collapse"
              id="main_nav"
              style={{ marginLeft: "-20px" }}
            >
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
                      <div className="d-flex ">
                        <ul className="">
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
                        <ul className="">
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
                        <ul className="">
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
                        <ul className="">
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
                        <ul className="">
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
                <li className="nav-item dropdown ">
                  <span className="subject-link subject-link2 dropdown-toggle pb-4 ">
                    প্রকাশনী
                  </span>
                  <div className="dropdown-menu">
                    <div className="drop-list-3">
                      <div className="d-flex">
                        <ul>
                          {publications?.data
                            ?.slice(0, 8)
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
                            ?.slice(8, 15)
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
                            ?.slice(15, 22)
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
                            ?.slice(22, 28)
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
                            ?.slice(28, 34)
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
                            <Link
                              to="/up-comming"
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              {" "}
                              বইমেলা {bookfair?.bookFairYear}
                            </Link>
                          </span>
                        ))}
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="subject-link subject-link2 pb-4  other-nav"
                    to="/up-comming"
                  >
                    একাডেমিক বই
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="subject-link subject-link2 pb-4  other-nav"
                    to="/up-comming"
                  >
                    অফারের বই
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="subject-link subject-link2 pb-4  other-nav"
                    to="/up-comming"
                  >
                    ষ্টেশনারী
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">+8801540186257</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
