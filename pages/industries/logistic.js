import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Card from "components/Industry/Card";
import OneColorCard from "components/Industry/OneColorCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function Logistic() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Logistic Sector"
          }
          title={"Logistic Sector"}
          text={
            "Extended Warehouse Management (EWM) provides flexible, automated support for managing all goods movements and inventory management in your warehouse complex. The system supports the scheduled and efficient execution of all logistics processes within your warehouse. Storage space management and optimization They map the entirety of your storage facilities in EWM."
          }
          textSecond={
            "You can set up different storage facilities, such as automatic warehouses, high-bay warehouses, block warehouses or fixed-location warehouses, in different types of warehouses according to your needs. You manage the stocks at storage location level. You can define these storage bins according to your own requirements. Each storage bin in your warehouse is shown in the system. This allows you to track all stock movements closely: You can track where a particular product is in your warehouse."
          }
          textThird={
            "Furthermore, you can optimally manage the storage bins using EWM because it takes care of the optimization of the products so that each product always receives the correct storage bin, depending on its size and access frequency. Inventory management and Extended Warehouse Management are completely integrated. With its inventory procedures and the entry of stock differences, the system ensures that the book inventory in Inventory Management always matches the inventory in EWM."
          }
          src={
            "/img/our_industries/logistic.png"
          }
          alt={"logistic-sector-img"}
        />
        <OneColorCard
          title={
            "The extended components of SAP EWM compared to SAP WM include the following"
          }
          subContent={[
            {
              key: "1-1_1_1",
              left: "Process or layout-oriented warehouse task creation",
            },
            {
              key: "1-2_2_2",
              left: "Integrated material flow control (MFS)",
            },
            {
              key: "1-3_3_3",
              left: "Illustration of additional logistical services (LZL)",
            },
            {
              key: "1-4_4_4",
              left: "Using a warehouse management monitor",
            },
            {
              key: "1-5_5_5",
              left: "Group consolidation according to legal requirement",
            },
            {
              key: "1-6_6_6",
              left: "Efficient wave planning",
            },
            {
              key: "1-7_7_7",
              left: "Storage and retrieval strategies",
            },
            {
              key: "1-8_8_8",
              left: "Handling Unit (HU) Management",
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default Logistic
