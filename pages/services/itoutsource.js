import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";
import OrderCard from "components/Services/OrderCard";
import InfoServiceCard from "components/Services/InfoServiceCard";
import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";


function ITOutSource() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={
            "Home / Services / IT Outsourcing and Services"
          }
          title={
            "IT Outsourcing and Services"
          }
          subTitle={
            "With the Most Talented Engineers in the Industry"
          }
          text={
            "The business approach to information management has changed drastically in the last decade. Enterprises are reaching out for digital transformation solutions in order to keep up with the rapidly-changing modern times. In this context, IT outsourcing services stand out for their ability to help companies get an edge over the competition."
          }
          textSecond={
            "By outsourcing IT services, any organization can shift its focus towards its core competencies and obtain otherwise unavailable resources. This way, the in-house IT staff⁠—if there is one⁠—has some weight taken off their shoulders, allowing them to tackle other critical issues."
          }
          src={"/img/itoutsource.png"}
          alt={"itoutsource"}
        />

        <OrderCard
          title={
            "What is IT Outsourcing?"
          }
          mainText={
            "IT Outsourcing Services are an efficient way to deliver IT solutions to any business on a global scale. Common IT outsource services can include anything from web design to entire IT infrastructure system layouts. In the current market, companies often work with IT Outsourcing Companies to reduce labor costs, boost business performance and gain access to world-class expert staff."
          }
          subTitle={
            "When to Use IT Outsourcing Services? There are many situations in which IT Outsource becomes the most viable option."
          }
          subContent={[
            {
              left: "Top talentedhv software developers are scarce on a global scale. IT Outsourcing companies work with remote methodologies to overcome this challenge.",
              stat: "01",
            },
            {
              left: "Many projects require either super specialized technical roles or temporary positions that are not attractive for top talented developers.",
              stat: "02",
            },
            {
              left: "Tackling a complex project requires a lot of know-how and technical expertise. Without those, it is easy to run into speed bumps and accumulate downtime.",
              stat: "03",
            },
            {
              left: "Getting the right results at the right time can be the difference between success and failure. Deadlines are just pushed back without the proper horse power.",
              stat: "04",
            },
            {
              left: "IT Outsourcing Services also include consulting and support solutions for existing or ongoing projects that have fallen off the tracks.",
              stat: "05",
            },
          ]}
        />

        <InfoServiceCard
          mainTitle={
            "Why Companies Outsource IT Services"
          }
          infoBox={[
            {
              title:
                "Access to Top IT Talent",
              textBox: [
                {
                  id: "1-1-1-5",
                  text: "In the IT industry, talent is the most valuable resource. The top IT outsource companies will find the best developers in the region and seamlessly implement their talent into your project.",
                },
              ],
            },
            {
              title:
                "Optimized Workloads​",
              textBox: [
                {
                  id: "2-1-1-5",
                  text: "Working with an outsourcing company means taking weight off your shoulders. With development taken care of, you can focus your company’s time and resources on your core business.",
                },
              ],
            },
            {
              title:
                "Industry Expertise",
              textBox: [
                {
                  id: "3-1-1-5",
                  text: "The best IT partners have years of expertise in the field and have formed expert development teams that have mastered a wide range of technologies. There is no substitute for this level of know-how.",
                },
              ],
            },
            {
              title: "Minimal Risks​",
              textBox: [
                {
                  id: "4-1-1-5",
                  text: "Having the best software developers on your team immediately reduces the risk of any project. A great IT outsourcing company will apply the best practices to increase project flexibility and nullify downtime.",
                },
              ],
            },
            {
              title:
                "Faster Launch Times​",
              textBox: [
                {
                  id: "5-1-1-5",
                  text: "Whether or not your company has an in-house tech team, the best IT companies will create custom solutions for your business and assemble the best teams to achieve project goals on time.",
                },
              ],
            },
            {
              title:
                "High-Quality Products​​",
              textBox: [
                {
                  id: "6-1-1-5",
                  text: "With all the previous benefits combined, it is easy to see how outsourcing IT to the right company produces high-quality software products. Still, always check references and past projects!",
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

export default ITOutSource
