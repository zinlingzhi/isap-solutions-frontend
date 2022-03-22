import React, { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Navbar(props) {
  const { transparent } = props;
  const bgColor = transparent ? 'bg-transparent' : 'c-bg-trueGray-700';
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [industryDropDownStatus, setIndustryDropDownStatus] = useState(false);
  const [
    servicesDropDownStatus,
    setServicesDropDownStatus,
  ] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || industryDropDownStatus === true || servicesDropDownStatus === true || navbarOpen === true)
      setColorchange(true);
    else setColorchange(false);
  };
  const clickDropDown = () => {
    setIndustryDropDownStatus(!industryDropDownStatus);
    setColorchange(true);
    setServicesDropDownStatus(false);
  }

  const clickDropDownServices = () => {
    setServicesDropDownStatus(
      !servicesDropDownStatus
    );
    setIndustryDropDownStatus(false);
    setColorchange(true);
  };

  if (typeof window !== "undefined") window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <nav
        className={[
          "fixed top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 navbar-expand-lg transition duration-500",
          colorChange
            ? "c-bg-trueGray-700"
            : bgColor,
        ].join(" ")}
      >
        <div className="padding-box-x box-twoColumn-left box-twoColumn-right w-full flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase cursor-pointer"
            >
              <img
                className="align-middle cursor-pointer"
                alt="logo"
                src="/img/brand/logo-icon.png"
              />
            </Link>
            <div
              // href="true"
              className="flex items-center cursor-pointer text-xl leading-none py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => {
                setNavbarOpen(
                  !navbarOpen
                );
                setColorchange(true);
              }}
            >
              <img
                className="w-8 cursor-pointer"
                src="/img/hamburger.png"
                alt="hamburger"
              />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center c-bg-trueGray-500 lg:bg-opacity-0 lg:shadow-none " +
              (navbarOpen
                ? "block"
                : "hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li
                className="flex items-center"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="/"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                      "lg:hover:text-blueGray-200 text-white px-3 lg:py-2 py-4 flex items-center",
                    ].join(" ")}
                  >
                    Home
                  </div>
                </Link>
              </li>
              <li
                className="flex items-center"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="/products"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                      "lg:hover:text-blueGray-200 text-white px-3 py-4 lg:py-2 flex items-center",
                    ].join(" ")}
                  >
                    Products
                  </div>
                </Link>
              </li>
              <li
                className="cursor-pointer relative"
                onClick={() =>
                  clickDropDownServices()
                }
              >
                <div className="flex items-center">
                  <div
                    className={[
                      colorChange
                        ? "text-white"
                        : "lg:text-white",
                      "lg:hover:text-blueGray-200 text-white pl-3 pr-6 py-4 lg:py-2 flex items-center",
                    ].join(" ")}
                  >
                    Services
                  </div>
                  <span className="absolute c-text-white right-3 text-xs">
                    <i
                      className={
                        industryDropDownStatus
                          ? "fas fa-chevron-up"
                          : "fas fa-chevron-down"
                      }
                    ></i>
                  </span>
                </div>
                {/* </Link> */}
                <ul
                  className={[
                    "relative left-8 lg:left-0 lg:absolute top-87px",
                    colorChange
                      ? "c-bg-trueGray-700"
                      : bgColor,
                    servicesDropDownStatus
                      ? "block"
                      : "hidden",
                  ].join(" ")}
                  onMouseLeave={() =>
                    setServicesDropDownStatus(
                      false
                    )
                  }
                >
                  <li className="cursor-pointer">
                    <Link
                      href="/services/sap"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center ",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        SAP
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/services/java_development"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Java Development
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/services/web_development"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        WEB &
                        Marketplace
                        Development
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/services/projectmanagement"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Project
                        Management
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/services/itoutsource"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        IT Outsourcing
                        and Services
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/services/host"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Hosting & Cloud
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="flex items-center text-white"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="https://www.isap.jobs"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      "lg:hover:text-blueGray-200 text-white px-3 py-4 lg:py-2 flex items-center",
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                    ].join(" ")}
                  >
                    Jobs
                  </div>
                </Link>
              </li>
              <li
                className="cursor-pointer relative"
                onClick={() =>
                  clickDropDown()
                }
              >
                <div className="flex items-center">
                  <div
                    className={[
                      colorChange
                        ? "text-white"
                        : "lg:text-white",
                      "lg:hover:text-blueGray-200 text-white pl-3 pr-6 py-4 lg:py-2 flex items-center",
                    ].join(" ")}
                  >
                    Industry Sectors
                  </div>
                  <span className="absolute c-text-white right-3 text-xs">
                    <i
                      className={
                        industryDropDownStatus
                          ? "fas fa-chevron-up"
                          : "fas fa-chevron-down"
                      }
                    ></i>
                  </span>
                </div>
                <ul
                  className={[
                    "relative left-8 lg:left-0 lg:absolute top-87px",
                    colorChange
                      ? "c-bg-trueGray-700"
                      : bgColor,
                    industryDropDownStatus
                      ? "block"
                      : "hidden",
                  ].join(" ")}
                  onMouseLeave={() =>
                    setIndustryDropDownStatus(
                      false
                    )
                  }
                >
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/avitation"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center ",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Aviation Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/realestate"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Real Estate
                        Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/finance"
                      className="flex items-center"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Finance &
                        Treasury Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/logistic"
                      className="flex items-center cursor-pointer"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Logistic Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/production"
                      className="flex items-center cursor-pointer"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Manufacturing &
                        Production
                        Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/wholesale"
                      className="flex items-center cursor-pointer"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Wholesale Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/utility"
                      className="flex items-center cursor-pointer"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Utility Sector
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      href="/industries/public_sector"
                      className="flex items-center cursor-pointer"
                    >
                      <div
                        className={[
                          "lg:hover:text-blueGray-200 text-white px-3 py-nav-bar lg:py-2 flex items-center",
                          colorChange
                            ? "text-white"
                            : "lg:text-white",
                        ].join(" ")}
                      >
                        Public Sector
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="flex items-center"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="#contacts"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      "lg:hover:text-blueGray-200 text-white px-3 py-4 lg:py-2 flex items-center",
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                    ].join(" ")}
                  >
                    Contacts
                  </div>
                </Link>
              </li>
              <li
                className="flex items-center lg:ml-16"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="/"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      "lg:hover:text-blueGray-200 text-white px-3 py-4 lg:py-2 flex items-center",
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                    ].join(" ")}
                  >
                    EN
                  </div>
                </Link>
              </li>
              <li
                className="flex items-center"
                onMouseEnter={() =>
                  setIndustryDropDownStatus(
                    false
                  )
                }
              >
                <Link
                  href="/asp"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={[
                      "lg:hover:text-blueGray-200 text-white py-4 lg:py-2 flex items-center",
                      colorChange
                        ? "text-white cursor-pointer"
                        : "lg:text-white cursor-pointer",
                    ].join(" ")}
                  >
                    Login
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
