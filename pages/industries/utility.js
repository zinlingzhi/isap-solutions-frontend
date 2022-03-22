import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import TwoColorCard from "components/Industry/TwoColorCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function Utility() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Utility Sector"
          }
          title={"Utility Sector"}
          text={
            "Master the fluctuations in power generation, transmission, distribution and supply by digitizing the energy management processes to meet new requirements, operational requirements, customer needs and technological needs"
          }
          src={
            "/img/our_industries/utility.png"
          }
          alt={"utility_sector-img"}
        />

        <TwoColorCard
          title={
            "Optimization of the energy supply"
          }
          subContent={[
            {
              key: "0-1_1",
              left: "Capital Portfolio and Project Management",
              right: "Fuel Management",
            },
            {
              key: "0-2_2",
              left: "Scheduling and load management",
            },
          ]}
        />
        <TwoColorCard
          title={
            "Operating efficiency for plants and networks"
          }
          subContent={[
            {
              key: "1-1_1",
              left: "Operation and maintenance of plants",
              right:
                "Investment Network",
            },
            {
              key: "1-2_2",
              left: "Environmental, health and safety",
            },
          ]}
        />
        <TwoColorCard
          title={
            "Consumption measurement"
          }
          subContent={[
            {
              key: "2-1_1",
              left: "Operation and maintenance of equipment",
              right:
                "Meter reading and energy data management",
            },
            {
              key: "2-2_2",
              left: "Planning and analysis in the utility industry",
            },
          ]}
        />
        <TwoColorCard
          title={"Customer Interaction"}
          subContent={[
            {
              key: "3-1_1",
              left: "Contextual marketing",
              right:
                "Intelligent sales and trading",
            },
            {
              key: "3-2_2",
              left: "Billing and revenue management",
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default Utility
