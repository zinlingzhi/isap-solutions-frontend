import React from 'react';

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";
import InfoServiceCard from "components/Services/InfoServiceCard";
import OfferCard from "components/Services/OfferCard";
import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";


function WebDevelopment() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={
            "Home / Services / WEB and Marketplace Development"
          }
          title={
            "WEB and Marketplace Development"
          }
          subTitle={
            "You need a product which will ensure a great volume of traffic from search engines and a high conversion rate?"
          }
          text={
            "We're a leading provider of custom marketplaces for businesses across the globe. With seven years of experience in the field, we’ve created a ready-made solution for quality and cost-efficient marketplace development. We build marketplaces that are unique, fast, and scalable."
          }
          src={
            "/img/web_development.png"
          }
          alt={"web_development"}
        />

        <OfferCard
          title={"What we offer"}
          text={
            "We offer a white-label marketplace solution that can be easily customized and designed according to your business needs. Our custom-made solution allows us to create four types of marketplaces:"
          }
        />

        <InfoServiceCard
          mainTitle={"Step by Step"}
          infoBox={[
            {
              title:
                "Appealing UI and streamlined UX",
              textBox: [
                {
                  id: "1-1-1-3",
                  text: "We design pleasing interfaces that encourage user engagement, nurture brand affinity, and increase a marketplace’s competitive advantage.",
                },
              ],
            },
            {
              title:
                "Seamless scalability",
              textBox: [
                {
                  id: "2-1-1-3",
                  text: "We use an architectural style that allows marketplaces to scale limitlessly and adopt new features rapidly. With our custom marketplace solution, your product will be capable of handling any load.",
                },
              ],
            },
            {
              title:
                "Rapid development",
              textBox: [
                {
                  id: "3-1-1-3",
                  text: "With our custom marketplace solution, you can launch your product much faster and cheaper than with other technology providers. We’ve built a solution for rapid development that’s extremely flexible and scalable.",
                },
              ],
            },
            {
              title:
                "Impeccable quality",
              textBox: [
                {
                  id: "4-1-1-3",
                  text: "Our agile software development practices – adherence to coding standards, continuous integration, automated testing, code ownership, etc. – help us produce bug-free products.",
                },
              ],
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

export default WebDevelopment
