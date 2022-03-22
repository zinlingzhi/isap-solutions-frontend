import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function RealEstate() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Real Estate Sector"
          }
          title={"Real Estate Sector"}
          text={
            "The product family of SAP and Addons stands for SAP® integrated, adaptable software solutions. Addressed to the real estate and investment industry, it comprises a large number of standardized industry solutions that can be individually scaled, modularly structured and linked as needed."
          }
          textSecond={
            "The result is future-proof and field-proven IT solutions that automate in-house processes, support communication processes and make a valuable contribution to long-term value retention and business success. We also place special focus on the end-2-end solution from tenant to service provider."
          }
          src={
            "/img/our_industries/real_estate.png"
          }
          alt={"real_estate-img"}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default RealEstate
