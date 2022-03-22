import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import TwoColorCard from "components/Industry/TwoColorCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function Wholesale() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Wholesale Sector"
          }
          title={"Wholesale Sector"}
          text={
            "Plan, shop, stock, sell, procure and analyze replenishments: Do all these activities on a unified IT platform. Connect your workflows and technologies with your customers, suppliers, employees, business processes, and the Internet of Things to unlock higher revenue potential and more relevant customer experiences."
          }
          src={
            "/img/our_industries/wholesale.png"
          }
          alt={"wholesale_sector-img"}
        />

        <TwoColorCard
          title={"Opportunity-to-Cash"}
          subContent={[
            {
              key: "0-1",
              left: "Fast and agile marketing",
              right:
                "Shopping experiences at the right moment",
            },
            {
              key: "0-2",
              left: "omni-channel commerce",
              right:
                "Cooperation in sales support",
            },
            {
              key: "0-3",
              left: "Quote-to-Cash",
              right:
                "omni-channel customer service",
            },
            {
              key: "0-4",
              left: "Service processes and business",
            },
          ]}
        />
        <TwoColorCard
          title={
            "Procurement cycle (Procure to Pay)"
          }
          subContent={[
            {
              key: "1-1",
              left: "Supplier and contract management",
              right:
                "Operational purchase",
            },
            {
              key: "1-2",
              left: "Supplier Management",
              right:
                "Inventory management and warehouse management",
            },
            {
              key: "1-3",
              left: "Management of external employees",
              right:
                "Invoice and Accounts Payable Management",
            },
            {
              key: "1-4",
              left: "Procurement Analysis",
            },
          ]}
        />
        <TwoColorCard
          title={
            "Logistics planning and - execution"
          }
          subContent={[
            {
              key: "2-1",
              left: "Demand management",
              right:
                "Sales, inventory and operational planning",
            },
            {
              key: "2-2",
              left: "Transport Management",
              right:
                "Warehouse Management",
            },
            {
              key: "2-3",
              left: "Return and delivery planning",
            },
          ]}
        />
        <TwoColorCard
          title={
            "Optimization of profitability"
          }
          subContent={[
            {
              key: "3-1",
              left: "Customer analysis in real time",
              right:
                "Procurement Analysis",
            },
            {
              key: "3-2",
              left: "Logistics networks",
              right:
                "Reimbursements and discounts",
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default Wholesale
