import React from "react";
import logo from "../../Images/booklogo.jpg";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5 px-0">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3"> Quick Link</h4>
              <a class="btn btn-link" href="..">
                <i
                  style={{ color: "#32cd32" }}
                  class="bi bi-caret-right-fill card-icon me-2"
                ></i>
                About Us
              </a>
              <a class="btn btn-link" href="..">
                <i
                  style={{ color: "#32cd32" }}
                  class="bi bi-caret-right-fill card-icon me-2"
                ></i>
                Contact Us
              </a>
              <a class="btn btn-link" href="..">
                <i
                  style={{ color: "#32cd32" }}
                  class="bi bi-caret-right-fill card-icon me-2"
                ></i>
                Privacy Policy
              </a>
              <a class="btn btn-link" href="..">
                <i
                  style={{ color: "#32cd32" }}
                  class="bi bi-caret-right-fill card-icon me-2"
                ></i>
                Terms & Condition
              </a>
              <a class="btn btn-link" href="..">
                <i
                  style={{ color: "#32cd32" }}
                  class="bi bi-caret-right-fill card-icon me-2"
                ></i>
                FAQs & Help
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Contact</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>Mirpur-1, Dhaka,
                Bangladesh
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+8801749718743
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>ami@gmail.com
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="..">
                  <i class="bi bi-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="..">
                  <i class="bi bi-facebook"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="..">
                  <i class="bi bi-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="..">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Gallery</h4>
              <div class="row g-2 pt-2">
                <div class="col-4">
                  <img
                    class="img-fluid bg-light p-1"
                    src="./images/g1.jpg"
                    alt=""
                  />
                </div>
                <div class="col-4">
                  <img class="img-fluid bg-light p-1" src="" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid bg-light p-1" src="" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid bg-light p-1" src="" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid bg-light p-1" src="" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid bg-light p-1" src="" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">আমাদের সাথে </h4>
              <p>
                আমাদের সম্পর্কে যোগাযোগ করুন বিক্রেতা হিসাবে যুক্ত হোন সাপোর্ট
                "Abiayn" অনলাইনে বই কেনা-বেচা এবং পড়ার একটি আদর্শ মার্কেটপ্লেস।
                বাংলাদেশে সর্বপ্রথম আমরাই দিচ্ছি অনলাইনে জেনুইন "ইবুক" পড়ার
                সুবিধা, "যত খুশি পড়ুন" স্টাইলে। এবার বই কিনুন এবং পড়ুন
                নিশ্চিন্তে।
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="..">
                  Simple Site
                </a>
                , All Right Reserved. Designed By{" "}
                <a class="border-bottom" href="..">
                  Mohammad Alamin
                </a>
                <br />
                Distributed By{" "}
                <a class="border-bottom" href="..">
                  Abiyan
                </a>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <a href="..">Home</a>
                  <a href="..">Cookies</a>
                  <a href="..">Help</a>
                  <a href="..">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
