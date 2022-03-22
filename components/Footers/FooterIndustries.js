import React from "react";
import Link from "next/link";

export default function FooterIndustries() {
  return (
    <>
      <div
        className="footer-container mt--140px"
        id="contacts"
      >
        <div className="mx-auto form-container relative top-140px form-bg-color">
          <div className="form-footer-box flex flex-col min-w-0 break-words w-full relative bottom-0 form-footer-color">
            <div className="flex-auto flex flex-wrap p-40px">
              <h4 className="sub-title-text text-gray-700 font-extrabold w-full mb-10 px-2 text-center md:text-left">
                Contact Us For Free
                Initial Consultation
              </h4>
              <div className="relative w-full md:w-1/2 mb-3 px-0 md:px-2">
                <input
                  type="text"
                  className="border-0 px-3 py-3 width-95 w-full industry-bgc-input placeholder-gray-400 text-gray-700 form-footer-color text-sm border-b border-gray-400 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Full Name"
                />
              </div>
              <div className="relative w-full md:w-1/2 mb-3 px-0 md:px-2">
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 w-full industry-bgc-input text-gray-700 form-footer-color text-sm border-b border-gray-400 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full md:w-1/2 mb-3 px-0 md:px-2">
                <input
                  type="phone"
                  className="border-0 px-3 py-3 placeholder-gray-400 width-95 w-full industry-bgc-input text-gray-700 form-footer-color text-sm border-b border-gray-400 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Phone number"
                />
              </div>
              <div className="relative w-full md:w-1/2 mb-3 px-0 md:px-2">
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 w-full industry-bgc-input text-gray-700 form-footer-color text-sm border-b border-gray-400 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Country"
                />
              </div>
              <div className="relative w-full mb-3 px-0 md:px-2">
                <textarea
                  rows="1"
                  cols="80"
                  className="border-0 px-3 py-3 placeholder-gray-400 w-full industry-bgc-input text-gray-700 form-footer-color text-sm border-b border-gray-400 focus:outline-none focus:ring w-full"
                  placeholder="Message"
                />
              </div>
              <div className="text-center mt-6 w-full md:w-5/12 px-2 m-rl-a">
                <button
                  className="w-full bg-gray-700 text-white active:bg-blueGray-600 text-sm  px-6 py-3 border-gray-400 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="relative c-bg-trueGray-200 pt-170 pb-6 box-twoColumn-left box-twoColumn-right">
          <div className="px-4">
            <div className="flex flex-wrap text-center lg:text-left jc-center">
              <div className="hidden md-flex-footer flex-grow ">
                <img
                  src="/img/brand/logo-gray-icon.png"
                  alt="logo"
                />
                <div className="block h-full border-l mx-2 border-gray-400"></div>
                <ul className="list-unstyled flex items-center">
                  <li>
                    <span className="text-trueGray-400 font-medium block px-2 text-sm">
                      Terms & Conditions
                    </span>
                  </li>
                  <li>
                    <span className="text-trueGray-400 font-medium block px-2 text-sm">
                      GDPR
                    </span>
                  </li>
                  <li>
                    <span className="text-trueGray-400 font-medium block px-2 text-sm">
                      Privacy Policy
                    </span>
                  </li>
                  <li>
                    <span className="text-trueGray-400 font-medium block px-2 text-sm">
                      Cookie policy
                    </span>
                  </li>
                  <li>
                    <span className="text-trueGray-400 font-medium block px-2 text-sm">
                      Sitemap
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto text-center md:text-right">
                <Link href="/disclaimer">
                  <div className="text-sm text-trueGray-400 py-1">
                    <span>©</span>{" "}
                    {new Date().getFullYear()}{" "}
                    <span>
                      iSAP. All rights
                      reserved
                    </span>{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
