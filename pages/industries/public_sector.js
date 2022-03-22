import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import StatCard from "components/Industry/StatCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

function PublicSector() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Public Sector"
          }
          title={"Public Sector"}
          text={
            "Improve Everyday Lives With Streamlined Technology Solutions"
          }
          textSecond={
            "Caring for the general public is in your best interest, so why settle for solutions that only partially help your organization? SAP provides a variety of innovative services designed to reduce overhead, streamline operations and improve customer experience. From processing paperwork to eliminating bureaucratic inefficiencies, use technology to enhance the way you serve the community."
          }
          src={
            "/img/our_industries/public-sector.png"
          }
          alt={"public_sector"}
        />

        <StatCard
          title={
            "How SAP’s Public Sector Management Can Help"
          }
          mainText={
            "SAP’s public sector management solutions help you gain visibility on your overall operations and leverage real-time data to make informed decisions. Using the cloud, iSAP Solutions digitally transforms your organization and enables you to improve engagement with citizens."
          }
          mainTextSecond={
            "Whether you’re in the defense, state and local government or regulated utilities industry, we’ll align every aspect of your organization with the challenges facing your community, so you can resolve problems first-hand. From recognizing threats and identifying vulnerabilities to using business insights to fix problems, you’ve got things covered."
          }
          subContent={[
            {
              left: "Shorter times for financial forecasts when scorecards are implemented",
              stat: "17%",
            },
            {
              left: "Lower audit costs when using loading and analyzing real-time data",
              stat: "57%",
            },
            {
              left: "Lower procurement cost as a percentage of total spend",
              stat: "15%",
            },
          ]}
        />
        <IndustrySlider />
      </main>
      <FooterIndustries />
    </>
  );
}

export default PublicSector

        /*
        <section className="py-5 md:py-10 mt-98px min-h-181px">
          <div className="container mx-auto mt-4">
            <h3 className="text-4xl text-gray-700 font-extrabold text-center mt-1">
              Public Sector
            </h3>
            <div>
              <div>
                <p className="text-gray-700 text-sm font-bold mt-4">
                  Improve Everyday Lives
                  With Streamlined
                  Technology Solutions
                </p>
                <p className="text-gray-700 text-sm font-medium mt-4">
                  Caring for the general
                  public is in your best
                  interest, so why
                  settle for solutions
                  that only partially
                  help your
                  organization? SAP
                  provides a variety of
                  innovative services
                  designed to reduce
                  overhead, streamline
                  operations and improve
                  customer experience.
                  From processing
                  paperwork to
                  eliminating
                  bureaucratic
                  inefficiencies, use
                  technology to enhance
                  the way you serve the
                  community.
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold mt-4">
                  How SAP’s Public
                  Sector Management Can
                  Help
                </p>
                <p className="text-gray-700 text-sm font-medium mt-4">
                  SAP’s public sector
                  management solutions
                  help you gain
                  visibility on your
                  overall operations and
                  leverage real-time
                  data to make informed
                  decisions. Using the
                  cloud, iSAP Solutions
                  digitally transforms
                  your organization and
                  enables you to improve
                  engagement with
                  citizens. Whether
                  you’re in the defense,
                  state and local
                  government or
                  regulated utilities
                  industry, we’ll align
                  every aspect of your
                  organization with the
                  challenges facing your
                  community, so you can
                  resolve problems
                  first-hand. From
                  recognizing threats
                  and identifying
                  vulnerabilities to
                  using business
                  insights to fix
                  problems, you’ve got
                  things covered.
                </p>
                <div className="w-full flex">
                  <div className="w-full lg:w-1/3 text-center p-8">
                    <h2 className="c-text-title-normal">
                      17%
                    </h2>
                    <p className="text-gray-700 text-md font-medium">
                      shorter times for
                      financial
                      forecasts when
                      scorecards are
                      implemented
                    </p>
                  </div>
                  <div className="w-full lg:w-1/3 text-center p-8">
                    <h2 className="c-text-title-normal">
                      57%
                    </h2>
                    <p className="text-gray-700 text-md font-medium">
                      lower audit costs
                      when using loading
                      and analyzing
                      real-time data
                    </p>
                  </div>
                  <div className="w-full lg:w-1/3 text-center p-8">
                    <h2 className="c-text-title-normal">
                      15%
                    </h2>
                    <p className="text-gray-700 text-md font-medium">
                      lower procurement
                      cost as a
                      percentage of
                      total spend
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold mt-4">
                  A Proven Methodology
                  When You Need
                  Value-Driven Results
                </p>
                <p className="text-gray-700 text-sm font-medium mt-4">
                  SAP implementations
                  are not just about
                  software and hardware.
                  iSAP Solutions
                  provides advice and
                  assistance throughout
                  the entire lifecycle
                  of your
                  implementation. Our
                  team of certified SAP
                  consultants help plan,
                  create detailed
                  roadmaps, install,
                  configure and test the
                  software – tailoring
                  it to meet the unique
                  needs of your
                  organization. Whether
                  you’re looking to
                  reduce operational
                  costs or streamline
                  performance, our
                  proven methodology
                  ensures your success.
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold mt-4">
                  Plan for the future
                  and improve
                  productivity with
                  agile forecasting.
                </p>
                <p className="text-gray-700 text-sm font-medium mt-4">
                  Leverage Real-Time
                  Reporting
                </p>
              </div>
            </div>
          </div>
        </section>
        */