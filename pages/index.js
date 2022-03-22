import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";


import Ecosystem from "components/Sections/Ecosystem";
import SAP from "components/Sections/SAP";
import Services from "components/Sections/Services";
import SuccessScore from "components/Sections/SuccessScore";
import WIP from "components/Sections/WIP";
import Cloud from "components/Sections/Cloud";
import Team from "components/Sections/Team";
import Contacts from "components/Sections/Contacts";

import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50 md:min-h-screen-75 overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <video
              className="hidden sm:block relative top-0 w-full h-full object-cover bg-cover -z-1"
              autoPlay={true}
              muted={true}
              playsInline={true}
              loop={true}
            >
              <source
                src="/video/background.mp4"
                type="video/mp4"
              ></source>
            </video>
            <img
              src="/video/mobile-background.gif"
              alt="mobile-gif"
              className="block sm:hidden relative top-0 w-full h-full object-cover bg-cover"
            />
          </div>
        </div>

        <Ecosystem />
        <SAP />
        <Services />
        <div className="display-none tablet-block desktop-block">
          <SuccessScore />
        </div>
        <WIP />
        <Cloud />
        <Team />
        <Contacts />
      </main>
      <Footer bgColor="bg-gray-100" />
    </>
  );
}
