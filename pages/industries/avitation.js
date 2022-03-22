import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";

import Card from "components/Industry/Card";
import InfoCard from "components/Industry/InfoCard";
import IndustrySlider from "components/IndustrySlider";

import FooterIndustries from "components/Footers/FooterIndustries.js";

export default function Avitation() {
  return (
    <>
      <Navbar />
      <main>
        <Card
          route={
            "Home / Industry Sectors / Aviation Sector"
          }
          title={"Aviation Sector"}
          text={
            "Modern ERP solutions from SAP move a notch up with its aviation software for flight operations, fleet management, route planning, and aviation MRO in a continuously changing business environment like the airline industry, establishing the quickest TAT feasible for your carrier. Give your consumers a personalized experience from the moment they book until the end of their journey."
          }
          src={
            "/img/our_industries/aviation.png"
          }
          alt={"aviation"}
        />
        
          <InfoCard
            mainTitle={
              "Efficient Fuel Managment"
            }
            infoBox={[
              {
                title:
                  "Business Planning and Consolidation",
                textBox: [
                  {
                    id: "1-1",
                    text: "Agile planning, budgeting, and business performance forecasting save planning cycle time and costs.",
                  },
                  {
                    id: "2-2",
                    text: "Real-time feedback loops that reveal company performance and changes, as well as simulation capabilities, can be used to predict the result of business actions.",
                  },
                ],
              },
              {
                id: "id-2",
                title:
                  "Fuel Management",
                textBox: [
                  {
                    id: "2-1",
                    text: "SAP aviation software for fuel management provides enterprise-wide visibility to manage fuel at the aircraft and flight level, which accounts for a significant portion of operational costs.",
                  },
                  {
                    id: "2-2",
                    text: "Automate price estimates and invoicing for gasoline procurement and fuel-dependent goods to streamline processes.",
                  },
                  {
                    id: "2-3",
                    text: "Enhance fuel-hedging techniques to better detect and manage risks while also ensuring regulatory compliance.",
                  },
                ],
              },
              {
                title:
                  "Network and Route Performance Management",
                textBox: [
                  {
                    id: "3-1",
                    text: "Airlines can learn about the profitability of specific routes, regions, and the entire network.",
                  },
                  {
                    id: "3-2",
                    text: "Through advanced analysis, it is easier to understand the levels that sustain and destroy earnings.",
                  },
                  {
                    id: "3-3",
                    text: "With multiple insights, you can see how customers, service, and channel productivity affect the bottom line.",
                  },
                ],
              },
            ]}
          />

          <InfoCard
            mainTitle={
              "Strategic Demand Management for Airlines"
            }
            infoBox={[
              {
                title: "Aviation MRO",
                textBox: [
                  {
                    id: "1-11",
                    text: "Predictive maintenance based on sensor-provided operational data prevents asset failure.",
                  },
                  {
                    id: "1-22",
                    text: "Companies can achieve the maximum asset performance and utilization over the asset lifespan with an integrated functional and technological platform.",
                  },
                  {
                    id: "1-33",
                    text: "For aircraft MRO execution, gain visibility across diverse fleets for line, base, component, and complex asset management.",
                  },
                ],
              },
              {
                title:
                  "Operational Risk Management",
                textBox: [
                  {
                    id: "2-11",
                    text: "Put in place the strongest incident management strategies to proactively detect and reduce the frequency of health and safety risks.",
                  },
                  {
                    id: "2-22",
                    text: "Through carefully specified safety instructions and operating permits, keep an eye on the safety of maintenance workers.",
                  },
                ],
              },
              {
                title:
                  "Catering Production",
                textBox: [
                  {
                    id: "3-11",
                    text: "With SAP production management and control software, you can keep catering waste to a minimum.",
                  },
                  {
                    id: "3-22",
                    text: "You can acquire early insight into last-minute modifications by using real-time load data and requirements gathered through customer ticketing.",
                  },
                  {
                    id: "3-33",
                    text: "Ensure that procurement plans are consistent, as well as contract and supplier compliance, as well as scheduling, preparation, and stock management.",
                  },
                ],
              },
            ]}
          />

          <InfoCard
            mainTitle={
              "Operations and Asset Management for Airlines"
            }
            infoBox={[
              {
                title:
                  "Catering Procurement",
                textBox: [
                  {
                    id: "1-111",
                    text: "Automate the entire procure-to-pay process to create, display, change and process purchase orders in response to purchase requisitions",
                  },
                  {
                    id: "1-222",
                    text: "Manage all accounts payable data with integrated invoice processing. To adapt to local country rules, country specific payments can be leveraged.",
                  },
                  {
                    id: "1-333",
                    text: "Align ground-handling processes with flight scheduling for reduced risk and greater sourcing efficiency",
                  },
                ],
              },
              {
                title:
                  "Ground Handling",
                textBox: [
                  {
                    id: "2-111",
                    text: "By integrating ground handling and sourcing functions, SAP aviation software equips organizations to adjust resources to meet the needs of a constantly changing airport environment due to flight changes, weather conditions and security threats",
                  },
                  {
                    id: "2-222",
                    text: "Collect and check invoices against business rules and handle exceptions with complex billing structures that are readily adaptable as sales contracts evolve",
                  },
                ],
              },
            ]}
          />

          <InfoCard
            mainTitle={
              "Contextual Marketing and Customer Service Excellence for Airlines"
            }
            infoBox={[
              {
                title:
                  "Real-time customer insights",
                textBox: [
                  {
                    id: "1-1111",
                    text: "Capture and monitor structured and unstructured data from emails, other transactions and social media into a single view.",
                  },
                  {
                    id: "1-2222",
                    text: "Track analytics into known and unknown customers and develop them into high-value customers and brand advocates",
                  },
                  {
                    id: "1-3333",
                    text: "Anticipate customer purchasing patterns and sentiments through predictive scores",
                  },
                ],
              },
              {
                title:
                  "Marketing with speed and agility",
                textBox: [
                  {
                    id: "2-1111",
                    text: "Provide context-relevant recommendations based on previous buying patterns.",
                  },
                  {
                    id: "2-2222",
                    text: "Engage in personalized multi-channel campaigns on social media channels, in the storefront, e-mail and SMS.",
                  },
                  {
                    id: "2-3333",
                    text: "Develop long-term customer loyalty by converting points into rewards through loyalty programs.",
                  },
                ],
              },
              {
                title:
                  "Omnichannel service excellence",
                textBox: [
                  {
                    id: "3-1111",
                    text: "Unified contact center operations for better performance and resolve customer issues faster.",
                  },
                  {
                    id: "3-2222",
                    text: "Field service engineers can have real-time access to information through mobile service execution.",
                  },
                  {
                    id: "3-3333",
                    text: "Listen to various social media channels to gauge customer sentiments and consistently provide great experiences.",
                  },
                ],
              },
              {
                title:
                  "Unique customer experiences",
                textBox: [
                  {
                    id: "4-1111",
                    text: "Provide context-relevant recommendations based on previous buying patterns.",
                  },
                  {
                    id: "4-2222",
                    text: "Engage in personalized multi-channel campaigns on social media channels, in the storefront, e-mail and SMS.",
                  },
                  {
                    id: "4-3333",
                    text: "Develop long-term customer loyalty by converting points into rewards through loyalty programs.",
                  },
                ],
              },
            ]}
          />

          <InfoCard
            mainTitle={
              "Digital Transformation of Commerce and Sales for Airlines"
            }
            infoBox={[
              {
                title:
                  "Master Data Management for Commerce",
                textBox: [
                  {
                    id: "1-11111",
                    text: "Meet regional market needs by localizing product offerings, languages and payment methods.",
                  },
                  {
                    id: "1-22222",
                    text: "Simplify product catalog and content management processes and ensure a consistent experience across multiple channels and touch points.",
                  },
                  {
                    id: "1-33333",
                    text: "Utilize real-time user behavior and provide a personalized experience while browsing.",
                  },
                ],
              },
              {
                title:
                  "Supplier Direct Booking",
                textBox: [
                  {
                    id: "2-11111",
                    text: "Provide context-relevant recommendations based on previous buying patterns.",
                  },
                  {
                    id: "2-22222",
                    text: "Engage in personalized multi-channel campaigns on social media channels, in the storefront, e-mail and SMS.",
                  },
                  {
                    id: "2-33333",
                    text: "Develop long-term customer loyalty by converting points into rewards through loyalty programs.",
                  },
                ],
              },
              {
                title:
                  "Sales Force Empowerment",
                textBox: [
                  {
                    id: "3-11111",
                    text: "Close more deals with real-time sales analytics reporting and dashboards that provide a complete view of customers from lead to contact.",
                  },
                  {
                    id: "3-22222",
                    text: "Gain customer performance intelligence to maintain and grow the right accounts.",
                  },
                ],
              },
              {
                title:
                  "Sales Performance Management",
                textBox: [
                  {
                    id: "4-11111",
                    text: "Provide context-relevant recommendations based on previous buying patterns.",
                  },
                  {
                    id: "4-22222",
                    text: "Engage in personalized multi-channel campaigns on social media channels, in the storefront, e-mail and SMS.",
                  },
                  {
                    id: "4-33333",
                    text: "Develop long-term customer loyalty by converting points into rewards through loyalty programs.",
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
