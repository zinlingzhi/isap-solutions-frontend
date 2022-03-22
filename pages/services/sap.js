import React from 'react';

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";
import OrderCard from "components/Services/OrderCard";
import InfoServiceCard from "components/Services/InfoServiceCard";
import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";

function sap() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={"Home / Services / SAP"}
          title={"SAP"}
          subTitle={
            "The Sustainability of an Enterprise Relies on its Ability to Adapt to New Market Trends and Emerging Digital Technologies."
          }
          text={
            "iSAP practice helps enterprises maximize their ERP investments for the digital economy. By implementing or optimizing SAP platforms to reduce costs, elegantly integrate with customer-facing systems and drive digital acceleration, we prepare you for the future."
          }
          src={"/img/sap.png"}
          alt={"sap_service"}
        />

        <OrderCard
          title={
            "Proven Track Record of Digital Transformation through Intelligent SAP Services"
          }
          mainText={
            "Complex business requirements coupled with uncertain and fluctuating market environments pose challenges that can hinder a company's productivity and negatively impact customer satisfaction."
          }
          mainTextSecond={
            "Although SAP has extended support for Business Suite 7 until 2030, SAP platform modernization, extension or replacement may still be part of your solution. Platform modernization is a critical initiative regardless of your platform’s version, provenance or condition. iSAP unique modernization approach will find the right solution for your unique needs."
          }
          subTitle={
            "With our SAP engineers strategically distributed throughout our global network, we provide the skills, tools, and processes to implement and optimize your SAP systems."
          }
          subContent={[
            {
              left: "Premier SAP Partner since 1994",
              stat: "01",
            },
            {
              left: "Multinational implementations, rollouts and support",
              stat: "02",
            },
            {
              left: "Gartner Magic Quadrant SAP AMS Providers Worldwide",
              stat: "03",
            },
            {
              left: "Indicated as Service Provider For Next-Generation SAP Products (2018)",
              stat: "04",
            },
            {
              left: "Certified in Digital Core & S/4 HANA Conversion (ECC to S/4 HANA)",
              stat: "05",
            },
          ]}
        />

        <InfoServiceCard
          mainTitle={"SAP Services"}
          infoBox={[
            {
              title:
                "SAP Application Management Services",
              textBox: [
                {
                  id: "1-1-1",
                  text: "SAP Application Management Services include development, implementation, integration, testing, maintenance and support (functional and technical), monitoring, backup, plus recovery and help desk services.",
                },
              ],
            },
            {
              title:
                "SAP Platform Modernization",
              textBox: [
                {
                  id: "2-1-1",
                  text: "iSAP unique modernization approach turns SAP into an agile, dynamic and capable digital core ready to adapt to fluctuating market conditions and customer requirements.",
                },
              ],
            },
            {
              title:
                "SAP S/4 HANA Migration and Transition Services",
              textBox: [
                {
                  id: "3-1-1",
                  text: "iSAP provides integrated business planning and digital transition strategies for S/4 HANA migrations. Our goal is to migrate what's still useful while implementing technology that supports your current and future business needs.",
                },
              ],
            },
            {
              title:
                "SAP S/4 HANA Implementation Services",
              textBox: [
                {
                  id: "4-1-1",
                  text: "Backed by 20 years of successful SAP implementation and support services, Softtek’s SAP S/4HANA implementation services enable businesses to meet the demands of the digital economy.",
                },
              ],
            },
            {
              title:
                "SAP Technology Platform & Infrastructure Services",
              textBox: [
                {
                  id: "5-1-1",
                  text: "Whether it's your existing SAP platform, or part of your S/4 HANA or cloud migration/implementation, Softtek's digital architecture and cloud advisory/implementation services ensure that your ERP platforms are equally robust and secure.",
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

export default sap
