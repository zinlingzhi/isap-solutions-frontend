import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import OneColorCard from "components/Industry/OneColorCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function Finance() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Finance & Treasury Sector"
          }
          title={
            "Finance & Treasury Sector"
          }
          text={
            "The portfolio of iSAP Solutions offers you a wide range of services around the technologies and processes of your financial and controlling environment. You benefit from our extensive practical experience and the sound consulting expertise of our specialists."
          }
          src={
            "/img/our_industries/finance.png"
          }
          alt={"finance_sector-img"}
        />
        <OneColorCard
          title={
            "The extended components of SAP EWM compared to SAP WM include the following"
          }
          subContent={[
            {
              key: "0-1_1_1",
              left: "Parallel accounting IAS / US-GAAP / HGB",
            },
            {
              key: "0-2_2_2",
              left: "Fast close with SAP (Financial) Closing Cockpit",
            },
            {
              key: "0-3_3_3",
              left: "Migration to “SAP New General Ledger” (new GL)",
            },
            {
              key: "0-4_4_4",
              left: "Harmonization of Payment Processes (SEPA)",
            },
            {
              key: "0-5_5_5",
              left: "Group consolidation according to legal requirement",
            },
            {
              key: "0-6_6_6",
              left: "Comprehensive advice in the field of contract accounting",
            },
            {
              key: "0-7_7_7",
              left: "Receivables management and factoring",
            },
            {
              key: "0-8_8_8",
              left: "Optimization of electronic account statement processes",
            },
            {
              key: "0-9_9_9",
              left: "Customization of in-house developments to SAP standard processes",
            },
            {
              key: "0-10_10_10",
              left: "Design and implementation of “SAP Investment Management” (SAP IM)",
            },
            {
              key: "0-11_11_11",
              left: "Migration to S / 4HANA",
            },
            {
              key: "0-12_12_12",
              left: "Design and implementation of standard and customer-specific value flows in controlling",
            },
            {
              key: "0-13_13_13",
              left: "Integration of different controlling systems like, Business Objects, BPC, BCS, BPS, Hyperion",
            },
            {
              key: "0-14_14_14",
              left: "Advising on projects such as roll-out, carve-out, mergers of companies or parts of companies as well as migration and harmonization projects",
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default Finance
