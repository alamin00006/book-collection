import React from "react";
import logo2 from "../../Images/logo2.png";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        class="custom-container-fluid bg-dark text-light footer pt-5 mt-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="custom-container py-5 px-0">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <div className="mb-3">
                <img src={logo2} alt="logo" />
              </div>
              <div class="">
                <p className="">
                  "Abiayn" অনলাইনে বই কেনা-বেচা এবং পড়ার একটি আদর্শ
                  মার্কেটপ্লেস। বাংলাদেশে সর্বপ্রথম আমরাই দিচ্ছি অনলাইনে জেনুইন
                  "ইবুক" পড়ার সুবিধা, "যত খুশি পড়ুন" স্টাইলে। এবার বই কিনুন এবং
                  পড়ুন নিশ্চিন্তে।
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-white mb-3">যোগাযোগ করুন </h5>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>মিরপুর-১ ঢাকা বাংলাদেশ
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
              <h5 class="text-white mb-3">জনপ্রিয় লিংক </h5>

              <Link class="btn btn-link" to="">
                ধর্মীয় বই
              </Link>
              <Link class="btn btn-link" to="">
                শিশু-কিশোর বই
              </Link>

              <Link class="btn btn-link" to="">
                প্যাকেজ বই
              </Link>
              <Link class="btn btn-link" to="">
                টেকনোলজি বই
              </Link>
              <Link class="btn btn-link" to="">
                প্রোগ্রামিং বই
              </Link>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-white mb-3">প্রয়োজনীয় লিংক </h5>

              <Link class="btn btn-link" to="">
                যোগাযোগ করুন
              </Link>
              <Link class="btn btn-link" to="">
                প্রাইভেসী পলিসি
              </Link>

              <Link class="btn btn-link" to="">
                রিটার্ন নীতিমালা
              </Link>
              <Link class="btn btn-link" to="">
                সাপোর্ট নীতিমালা
              </Link>
              <Link class="btn btn-link" to="">
                বিক্রেতা নীতিমালা
              </Link>
            </div>
          </div>
        </div>
        <div class="custom-container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p> Copyright &copy; 2023 abiyann.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
