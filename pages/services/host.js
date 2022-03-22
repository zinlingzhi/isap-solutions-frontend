import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";

import TwoColorCard from "components/Industry/TwoColorCard";
import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";


export default function Host() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={
            "Home / Services / Hosting & Cloud"
          }
          title={"Hosting & Cloud"}
          subTitle={
            "For all our services, satisfied customers and a high level of service orientation are our top priority"
          }
          text={
            "ISAP Solutions stands for IT services from a single source – from needs analysis and conception through professional development to long-term and reliable support of your IT system landscape. Our service portfolio consists of a wide range of modular components. Benefit from our competence in IT consulting and as an SAP® partner and realize together with us exactly the solution that is optimal for your tasks and goals."
          }
          src={"/img/host.png"}
          alt={"host"}
        />

        <TwoColorCard
          title={
            "We advise you on using new technologies to increase availability while reducing operating costs."
          }
          mainText={
            "The provision and reliable operation of an efficient technical system environment is a foundation for business success. With our comprehensive range of services, we support you to build, operate and optimize such an IT landscape."
          }
          mainTextSecond={
            "For all our services, satisfied customers and a high level of service orientation are our top priority. Particularly important to us is the close and cooperative relationship with our customers, because it is the basis for a long-term and successful cooperation."
          }
          subTitle={
            "We only offer techniques that have proven themselves on the market and that we have tested and used ourselves, because your systems and sensitive data are too important to us for experiments"
          }
          subContent={[
            {
              key: "0-1-6",
              left: "HOSTING MS EXCHANGE",
              right:
                "HOSTING ONLINE CRM",
            },
            {
              key: "0-2-6",
              left: "HOSTING MS OFFICE PRO",
              right:
                "HOSTING ONLINE TEST TOOL",
            },
            {
              key: "0-3-6",
              left: "HOSTING MS PROJECT",
              right:
                "HOSTING ONLINE SHAREPOINT FOR DOCUMENTATION",
            },
            {
              key: "0-4-6",
              left: "HOSTING MS VISION",
              right:
                "HOSTING CONFLUENCE / JIRA",
            },
            {
              key: "0-5-6",
              left: "HOSTING REAL TIME ECOMMERCE SOLUTIONS",
              right:
                "HOSTING SOFTWARE ASSET MANAGEMENT (LICENSE ASSET CONTRACT MANAGEMENT)",
            },
          ]}
        />

        <div className="wrapper-y-40px display-none tablet-block desktop-block">
          <SuccessScore />
        </div>
        <PortfolioSlider />
      </main>

      <FooterServices bgColor="bg-trueGray-200" />
    </>
  );
}


