import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import ImageCard from "components/Services/ImageCard";

import InfoServiceCard from "components/Services/InfoServiceCard";
import TextCard from "components/Services/TextCard";


import SuccessScore from "components/Sections/SuccessScore";
import PortfolioSlider from "components/PortfolioSlider";
import FooterServices from "components/Footers/FooterServices.js";


function JavaDevelopment() {
  return (
    <>
      <Navbar fixed />
      <main>
        <ImageCard
          route={
            "Home / Services / Java Development"
          }
          title={"Java Development"}
          subTitle={
            "In the land of the web, mobile, and business solutions, Java is the law."
          }
          text={
            "Since 2020 iSAP has been developing complex distributed back-ends, enterprise applications and groundbreaking new technologies using Java web development. Out Java-savvy professionals apply core concepts of object-oriented programming to a project to build holistic, real-world practical web and business applications from the ground up."
          }
          src={
            "/img/java_development.png"
          }
          alt={"java_development"}
        />
        <TextCard
          title="With Java’s advanced security features and its stable, platform-independent, open-source nature, it’s widely used in software development."
          textFirst="Even though Java rules for developing various types of apps, it involves complex methodology and technology (new and legacy) management. Java requires experience with Java platforms, existing and emerging trends, and the foresight to bring them all together. Our Java experts’ skills encompass many aspects of Java web application development like application servers, frameworks, databases, libraries, components, and technologies. A smart Java developer knows better than to jump right into a project without performing due diligence first."
          textSecond="Java development is cost-effective due to its portability and relatively quick turnaround time. But putting Java to its best use takes a Java expert who has the experience to fully understand the technology’s power and the skills to brainstorm the best solutions."
          textThird="Keeping a Java developer on company staff isn’t feasible for most small to mid-sized enterprises. That doesn’t mean that they can’t benefit from Java-based applications. Outsourcing Java development projects have become critical because of Java’s use in business today."
          textFour="Choosing Redwerk as your offshore Java developers means you have access to experts able to complete the full development cycle of your software. And no matter where you’re based, you’ll always have access to the best Java development talent with us."
          textFive="From e-government solutions to paid subscription SaaSs, CMSs, and more, Redwerk has the experience and know-how to help your business benefit from Java-based solutions. You’ll wonder how your business ever lived without it."
        />
        <InfoServiceCard
          mainTitle={
            "Our Java Software Development Services"
          }
          infoBox={[
            {
              title: "Java SaaS",
              textBox: [
                {
                  id: "1-1-1-2",
                  text: "SaaS is in high demand among businesses as a way to dramatically reduce costs, increase productivity, and avoid paying excessively for new IT infrastructures. Thanks to our expertise in custom Java software development, businesses can be sure their IT demands will be taken care of without breaking budgets.",
                },
              ],
            },
            {
              title: "Java PaaS",
              textBox: [
                {
                  id: "2-1-1-2",
                  text: "Outsourcing your platform to Redwerk’s Java experts is a great way to save on development costs while also improving the quality of the services you provide. Offering third-party developers access to your API is the key to market success.",
                },
              ],
            },
            {
              title: "Java Mobile",
              textBox: [
                {
                  id: "3-1-1-2",
                  text: "If you have an idea for a mobile app and want to implement it, we are happy to provide you our Java mobile app development services. Virtually every modern business has an app available on iOS and/or Android. The secret to app success is providing users with useful functionality and simplicity on the screen of their smartphone.",
                },
              ],
            },
            {
              title:
                "Java Web Application",
              textBox: [
                {
                  id: "4-1-1-2",
                  text: "Our Java web development services provide a full cycle starting from design to implementation and maintenance. Redwerk’s expertise is comprehensive – we know the ins and outs of making your app work across all browsers and platforms, complete with bulletproof backend code.",
                },
              ],
            },
            {
              title: "Java Application",
              textBox: [
                {
                  id: "5-1-1-2",
                  text: "When connectivity, performance, or security is a concern, software that runs locally on the user’s machine is a solution. We have experience dealing with questions of desktop vs. java web development, and our developers have created software for all major operating systems.",
                },
              ],
            },
            {
              title:
                "Java Server-Side Software",
              textBox: [
                {
                  id: "6-1-1-2",
                  text: "Without a backend tuned and tested to function flawlessly even under heavy traffic, even the most well-crafted web app runs the risk of grinding to a halt. With our experience in server-side development and testing, you can rest assured that your web app’s launch will be trouble-free.",
                },
              ],
            },
          ]}
        />
        <div className="wrapper-y-40px display-none tablet-block desktop-block">
          <SuccessScore />
        </div>
        <PortfolioSlider />
      </main>

      <FooterServices bgColor="bg-trueGray-200" />
    </>
  ); 
}

export default JavaDevelopment
