import React from 'react';

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";
import OrderCard from "components/Services/OrderCard";
import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";


function ProjectManagement() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={
            "Home / Services / Project Management"
          }
          title={"Project Management"}
          subTitle={
            "Methodical project management creates transparency"
          }
          text={
            "When introducing the products, our consultants use the project management method ASAP (Accelerated SAP) from SAP® AG. This ensures a high-quality project implementation. Thanks to many years of experience in numerous customer assignments, you automatically benefit from our best practice approach."
          }
          src={
            "/img/projectmanagement.jpg"
          }
          alt={"projectmanagement"}
        />

        <OrderCard
          title={
            "Technically, your product launch is accompanied by the Hanse Orga Implementation Roadmap."
          }
          mainText={
            "The Roadmap contains guidance, tools and templates to ensure efficient project implementation. Included templates cover the important points of the project. Processes are predefined and are adapted to customer needs within the framework of the blueprint."
          }
          mainTextSecond={
            "Even after the product launch, we are on hand with help and advice. You can always contact a competent contact person via our hotline. And once the challenges in finance and accounting change, we will gladly make the necessary adjustments."
          }
          subTitle={
            "Comprehensive project management (planning / controlling / risk management). The individual project steps"
          }
          subContent={[
            {
              left: "Project preparation (project start, planning, kick-off meeting)",
              stat: "01",
            },
            {
              left: "Business Blueprint – Design phase",
              stat: "02",
            },
            {
              left: "Test the solution with test software PANAYA online",
              stat: "03",
            },
            {
              left: "Final preparation (training of end users, final exam)",
              stat: "04",
            },
            {
              left: "Go Live & Support (user support, project completion)",
              stat: "05",
            },
          ]}
        />

        <div className="wrapper-y-40px display-none tablet-block desktop-block">
          <SuccessScore />
        </div>
        {/* <Contacts /> */}
        <PortfolioSlider />
      </main>

      <FooterServices bgColor="bg-trueGray-200" />
    </>
  );
}

export default ProjectManagement
