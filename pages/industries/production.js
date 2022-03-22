import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import InfoCard from "components/Industry/InfoCard";
import OneColorCard from "components/Industry/OneColorCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function Production() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Manufacturing & Production Sector"
          }
          title={
            "Manufacturing & Production Sector"
          }
          text={
            "Classic ERP for planning and production"
          }
          textSecond={
            "Entrepreneurial planning of resources such as capital, personnel, operating resources, materials, information and communication technology and IT systems requires enterprise resource planning systems, or ERP for short. We provide you with the SAP-based tools so you can plan, control and monitor your key figures."
          }
          src={
            "/img/our_industries/production.png"
          }
          alt={"production-sector-img"}
        />

        <InfoCard
          mainTitle={"Our ERP services"}
          infoBox={[
            {
              title: "SAP ERP",
            },
            {
              title:
                "Detailed planning",
            },
            {
              title:
                "Advanced Production Planning with SAP HANA",
            },
          ]}
        />

        <OneColorCard
          title={
            "Beyond the standard SAP functions of process and production order processing, including Kanban, the topics listed here complete the portfolio"
          }
          subContent={[
            {
              key: "2-1_1_1",
              left: "Integration of subsystems: MES and process control systems (PLS), weighing systems",
            },
            {
              key: "2-2_2_2",
              left: "Optimization of production: Individual solutions for consumption and time feedback, use of mobile solutions",
            },
            {
              key: "2-3_3_3",
              left: "Documentation: Customer-specific configuration of order-related documents and forms, electronic PI sheet, shift reports and shift notes (production and maintenance)",
            },
            {
              key: "2-4_4_4",
              left: "Regulatory requirements: Digital signatures in process orders and in quality management. Specific topics of planning",
            },
          ]}
        />

        <InfoCard
          mainTitle={
            "In addition to the general SAP functions such as long-term, sales, demand and capacity planning, the following specific topics are part of our consulting services"
          }
          infoBox={[
            {
              id: "id-5-1",
              title: "Demand Planning",
              textBox: [
                {
                  id: "5-1-1",
                  text: "Best practice solution for flexible planning with a predefined planning infrastructure, automatic selection of forecast models, proprietary version management, and data migration add-ons",
                },
              ],
            },
            {
              id: "id-5-2",
              title:
                "Detailed planning",
              textBox: [
                {
                  id: "5-2-1",
                  text: "Individually configured graphical planning board",
                },
              ],
            },
            {
              id: "id-5-3",
              title:
                "Advanced Production Planning with SAP HANA",
              textBox: [
                {
                  id: "5-3-1",
                  text: "MRP Live, PPDS on ERP, PPDS Detailed Scheduling",
                },
              ],
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default Production
