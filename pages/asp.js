import React from "react";
import Link from "next/link";
import Breadcrumbs from 'nextjs-breadcrumbs';

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PaymentNetwork() {
  return (
    <>
      <Navbar />
      <main>
        <section className="nav-menu-mt w-full full-height">
          <iframe
            className="w-full"
            scroll="no"
            width="768px"
            height="800px"
            src="/aspService.html"
            title="asp service"
          ></iframe>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

/*

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP Token Issuance
                  Platform
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Crowdfunding
                  Platform
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP KYC
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP IPEYE
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Health
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Legal
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Network (eSIM)
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP University
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Domains
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP Marketing
                </h2>
                <h2 className="c-text-title-normal mt-4">
                  iSAP OXC
                </h2>
              </div>
            </div>
*/
