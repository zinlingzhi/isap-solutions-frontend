import React from "react";

import Slider from "components/Slider";
import OneItemSlider from "components/Slider/OneItemSlider";
import TwoItemSlider from "components/Slider/TwoItemSlider";

export default function IndustrySlider() {
  const itemsPerOne = [
    {
      route: "avitation",
      src: "/img/our_industries/aviation.png",
      title: "Aviation Sector",
      text: "Modern ERP solutions from SAP move a notch up with its aviation software for flight operations, fleet management, route planning ...",
    },
    {
      route: "realestate",
      src: "/img/our_industries/real_estate.png",
      title: "Real Estate Sector",
      text: "The product family of SAP and Addons stands for SAP® integrated, adaptable software solutions ...",
    },
    {
      route: "finance",
      src: "/img/our_industries/finance.png",
      title:
        "Finance & Treasury Sector",
      text: "The portfolio of iSAP Solutions offers you a wide range of services around the technologies ...",
    },
    {
      route: "logistic",
      src: "/img/our_industries/logistic.png",
      title: "Logistic Sector",
      text: "Extended Warehouse Management (EWM) provides flexible, automated support for managing all goods movements and inventory ...",
    },
    {
      route: "production",
      src: "/img/our_industries/production.png",
      title:
        "Manufacturing & Production Sector",
      text: "Classic ERP for planning and production.",
    },
    {
      route: "wholesale",
      src: "/img/our_industries/wholesale.png",
      title: "Wholesale Sector",
      text: "Plan, shop, stock, sell, procure and analyze replenishments: Do all these activities on a unified IT platform.",
    },
    {
      route: "utility",
      src: "/img/our_industries/utility.png",
      title: "Utility Sector",
      text: "Master the fluctuations in power generation, transmission, distribution and supply by digitizing the energy management processes ...",
    },
    {
      route: "public_sector",
      src: "/img/our_industries/public-sector.png",
      title: "Public Sector",
      text: "Improve Everyday Lives With Streamlined Technology Solutions.",
    },
  ];

  const itemsPerTwo = [
    [
      {
        route: "avitation",
        src: "/img/our_industries/aviation.png",
        title: "Aviation Sector",
        text: "Modern ERP solutions from SAP move a notch up with its aviation software for flight operations ...",
      },
      {
        route: "realestate",
        src: "/img/our_industries/real_estate.png",
        title: "Real Estate Sector",
        text: "The product family of SAP and Addons stands for SAP® integrated, adaptable software solutions ...",
      },
    ],
    [
      {
        route: "finance",
        src: "/img/our_industries/finance.png",
        title:
          "Finance & Treasury Sector",
        text: "The portfolio of iSAP Solutions offers you a wide range of services around the technologies ...",
      },
      {
        route: "logistic",
        src: "/img/our_industries/logistic.png",
        title: "Logistic Sector",
        text: "Extended Warehouse Management (EWM) provides flexible, automated support for managing all goods ...",
      },
    ],
    [
      {
        route: "production",
        src: "/img/our_industries/production.png",
        title:
          "Manufacturing & Production Sector",
        text: "Classic ERP for planning and production.",
      },
      {
        route: "wholesale",
        src: "/img/our_industries/wholesale.png",
        title: "Wholesale Sector",
        text: "Plan, shop, stock, sell, procure and analyze replenishments: Do all these activities on a unified IT platform.",
      },
    ],
    [
      {
        route: "utility",
        src: "/img/our_industries/utility.png",
        title: "Utility Sector",
        text: "Master the fluctuations in power generation, transmission, distribution and supply by digitizing the energy ...",
      },
      {
        route: "public_sector",
        src: "/img/our_industries/public-sector.png",
        title: "Public Sector",
        text: "Improve Everyday Lives With Streamlined Technology Solutions.",
      },
    ],
  ];

  const itemsPerThree = [
    [
      {
        route: "avitation",
        src: "/img/our_industries/aviation.png",
        title: "Aviation Sector",
        text: "Modern ERP solutions from SAP move a notch up with its aviation software for flight operations ...",
      },
      {
        route: "realestate",
        src: "/img/our_industries/real_estate.png",
        title: "Real Estate Sector",
        text: "The product family of SAP and Addons stands for SAP® integrated, adaptable software solutions ...",
      },
      {
        route: "finance",
        src: "/img/our_industries/finance.png",
        title:
          "Finance & Treasury Sector",
        text: "The portfolio of iSAP Solutions offers you a wide range of services around the technologies ...",
      },
    ],
    [
      {
        route: "logistic",
        src: "/img/our_industries/logistic.png",
        title: "Logistic Sector",
        text: "Extended Warehouse Management (EWM) provides flexible, automated support for managing all goods movements ...",
      },
      {
        route: "production",
        src: "/img/our_industries/production.png",
        title:
          "Manufacturing & Production Sector",
        text: "Classic ERP for planning and production.",
      },
      {
        route: "wholesale",
        src: "/img/our_industries/wholesale.png",
        title: "Wholesale Sector",
        text: "Plan, shop, stock, sell, procure and analyze replenishments: Do all these activities on a unified IT platform.",
      },
    ],
    [
      {
        route: "utility",
        src: "/img/our_industries/utility.png",
        title: "Utility Sector",
        text: "Master the fluctuations in power generation, transmission, distribution and supply by digitizing the energy ...",
      },
      {
        route: "public_sector",
        src: "/img/our_industries/public-sector.png",
        title: "Public Sector",
        text: "Improve Everyday Lives With Streamlined Technology Solutions.",
      },
      {
        route: "avitation",
        src: "/img/our_industries/aviation.png",
        title: "Aviation Sector",
        text: "Modern ERP solutions from SAP move a notch up with its aviation software for flight operations ...",
      },
    ],
  ];

  return (
    <div className="mb-80px">
      <div className="mx-auto box-twoColumn-left box-twoColumn-right">
        <h3 className="sub-title-text padding-box-x text-gray-700 font-extrabold c-3x-title-container">
          Portfolio
        </h3>
      </div>
      <div className="display-none mob">
        <OneItemSlider
          items={itemsPerOne}
        />
      </div>
      <div className="display-none tablet">
        <TwoItemSlider
          items={itemsPerTwo}
        />
      </div>
      <div className="display-none desktop">
        <Slider items={itemsPerThree} />
      </div>
    </div>
  );
}
