import React from 'react';

import Slider from "components/Slider";
import OneItemSlider from "components/Slider/OneItemSlider";
import TwoItemSlider from "components/Slider/TwoItemSlider";

export default function PortfolioSlider() {
  const itemsPerOne = [
    {
      route: "sap",
      src: "/img/our_services/sap.png",
      title: "SAP",
      text: "We implement new SAP systems in organizations of all sizes and industries.",
    },
    {
      route: "java_development",
      src: "/img/our_services/java_development.png",
      title: "Java Development",
      text: "Our Java software development services will assist your company in achieving increased security while lowering ...",
    },
    {
      route: "web_development",
      src: "/img/our_services/web_development.png",
      title:
        "WEB & Marketplace Development",
      text: "We will work with your business to overcome the problems that B2B ...",
    },
    {
      route: "projectmanagement",
      src: "/img/our_services/project_management.png",
      title: "Project Management",
      text: "Let us help you to shape a workflow that will match your team's needs.",
    },
    {
      route: "itoutsource",
      src: "/img/our_services/it_outsourcing.png",
      title:
        "IT Outsourcing and Services",
      text: "Allow us to build a high-performing team that is tailored to your demands at a cost-effective rate.",
    },
    {
      route: "host",
      src: "/img/our_services/hosting_cloud.png",
      title: "Hosting & Cloud",
      text: "With our cloud services, you can securely manage even the most resource-intensive projects.",
    },
  ];

  const itemsPerTwo = [[
    {
      route: "sap",
      src: "/img/our_services/sap.png",
      title: "SAP",
      text: "We implement new SAP systems in organizations of all sizes and industries.",
    },
    {
      route: "java_development",
      src: "/img/our_services/java_development.png",
      title: "Java Development",
      text: "Our Java software development services will assist your company in achieving increased security while lowering ...",
    }],
    [{
      route: "web_development",
      src: "/img/our_services/web_development.png",
      title:
        "WEB & Marketplace Development",
      text: "We will work with your business to overcome the problems that B2B ...",
    },
    {
      route: "projectmanagement",
      src: "/img/our_services/project_management.png",
      title: "Project Management",
      text: "Let us help you to shape a workflow that will match your team's needs.",
    }],
    [{
      route: "itoutsource",
      src: "/img/our_services/it_outsourcing.png",
      title:
        "IT Outsourcing and Services",
      text: "Allow us to build a high-performing team that is tailored to your demands at a cost-effective rate.",
    },
    {
      route: "host",
      src: "/img/our_services/hosting_cloud.png",
      title: "Hosting & Cloud",
      text: "With our cloud services, you can securely manage even the most resource-intensive projects.",
    }],
  ];

  const itemsPerThree = [
    [{
      route: "sap",
      src: "/img/our_services/sap.png",
      title: "SAP",
      text: "We implement new SAP systems in organizations of all sizes and industries.",
    },
    {
      route: "java_development",
      src: "/img/our_services/java_development.png",
      title: "Java Development",
      text: "Our Java software development services will assist your company in achieving increased security while lowering ...",
    },
    {
      route: "web_development",
      src: "/img/our_services/web_development.png",
      title:
        "WEB & Marketplace Development",
      text: "We will work with your business to overcome the problems that B2B ...",
    }],
    [{
      route: "projectmanagement",
      src: "/img/our_services/project_management.png",
      title: "Project Management",
      text: "Let us help you to shape a workflow that will match your team's needs.",
    },
    {
      route: "itoutsource",
      src: "/img/our_services/it_outsourcing.png",
      title:
        "IT Outsourcing and Services",
      text: "Allow us to build a high-performing team that is tailored to your demands at a cost-effective rate.",
    },
    {
      route: "host",
      src: "/img/our_services/hosting_cloud.png",
      title: "Hosting & Cloud",
      text: "With our cloud services, you can securely manage even the most resource-intensive projects.",
    }],
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
