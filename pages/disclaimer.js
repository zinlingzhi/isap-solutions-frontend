import React from "react";
import Link from "next/link";
import Breadcrumbs from 'nextjs-breadcrumbs';
import Disclaimer from "components/Services/Disclaimer";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PaymentNetwork() {
  return (
    <>
      <Navbar />
      <main>
        <section className="nav-menu-mt w-full">
          <Disclaimer
            title="Copyright Disclaimer"
            titleFirst="Acceptance of our Terms."
            textFirst="By visiting the website www.isap.solutions, viewing, accessing or otherwise using any of the services or information created, collected, compiled or submitted to iSAP Solutions ltd, you agree to be bound by the following Terms and Conditions of Service. If you do not want to be bound by our Terms your only option is not to visit, view or otherwise use the services of iSAP Solutions ltd. You understand, agree and acknowledge that these Terms constitute a legally binding agreement between you and iSAP Solutions ltd and that your use of www.isap.solutions shall indicate your conclusive acceptance of this agreement."
            titleSecond="Provision of Services"
            textSecond="You agree and acknowledge that iSAP Solutions is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information contained in it. Furthermore, you agree and acknowledge that iSAP Solutions is entitled to provide services to you through subsidiaries or affiliated entities."
            titleThird="Proprietary Rights"
            textThird="You acknowledge and agree that iSAP Solutions may contain proprietary and confidential information including trademarks, service marks, and patents protected by intellectual property laws and international intellectual property treaties. iSAP Solutions authorizes you to view and make a single copy of portions of its content for offline, personal, non-commercial use. Our content may not be sold, reproduced, or distributed without our written permission. Any third-party trademarks, service marks, and logos are the property of their respective owners. Any further rights not specifically granted herein are reserved."
            titleFour="Submitted Content"
            textFour="When you submit content to iSAP Solutions you simultaneously grant iSAP Solutions an irrevocable, worldwide, royalty-free license to publish, display, modify, distribute and syndicate your content worldwide. You confirm and warrant that you have the required authority to grant the above license to iSAP Solutions."
            titleFive="Disclaimer of Warranties"
            textFive="You understand and agree that your use of iSAP Solutions is entirely at your own risk and that our services are provided 'As Is' and 'As Available'. iSAP Solutions does not make any express or implied warranties, endorsements or representations whatsoever as to the operation of the iSAP Solutions website, information, content, materials, or products. This shall include, but not be limited to, implied warranties of merchantability and fitness for a particular purpose and non-infringement, and warranties that access to or use of the service will be uninterrupted or error-free or that defects in the service will be corrected."
            titleSix="Changes to the Terms"
            textSix="iSAP Solutions reserves the right to modify these Terms from time to time at our sole discretion and without any notice. Changes to our Terms become effective on the date they are posted and your continued use of iSAP Solutions after any changes to Terms will signify your agreement to be bound by them."
            titleSeven="Limitation of Liability"
            textSeven="You understand and agree that iSAP Solutions and any of its subsidiaries or affiliates shall in no event be liable for any direct, indirect, incidental, consequential, or exemplary damages. This shall include, but not be limited to damages for loss of profits, business interruption, business reputation or goodwill, loss of programs or information, or other intangible loss arising out of the use of or the inability to use the service, or information, or any permanent or temporary cessation of such service or access to information, or the deletion or corruption of any content or information, or the failure to store any content or information. The above limitation shall apply whether or not iSAP Solutions has been advised of or should have been aware of the possibility of such damages. In jurisdictions where the exclusion or limitation of liability for consequential or incidental damages is not allowed the liability of iSAP Solutions is limited to the greatest extent permitted by law."
            titleEight="Jurisdiction"
            textEight="You expressly understand and agree to submit to the personal and exclusive jurisdiction of the courts of the country, state, province, or territory determined solely by iSAP Solutions to resolve any legal matter arising from this agreement or related to your use of iSAP Solutions. If the court of law has jurisdiction, rules that any provision of the agreement is invalid, then that provision will be removed from the Terms and the remaining Terms will continue to be valid."
            titleNine="Entire Agreement"
            textNine="You understand and agree that the above Terms constitute the entire general agreement between you and iSAP Solutions. You may be subject to additional Terms and Conditions when you use, purchase or access other services, affiliate services, or third-party content or material."
            titleTen="Copyright"
            textTen="By accessing this site, you have a right to private, non-collective and non-exclusive content of this website (not limited to: text, images, videos, animations ...). All reproduction rights are reserved, including for downloadable documents, icons and photographs."
          />
        </section>
      </main>
      <Footer />
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
