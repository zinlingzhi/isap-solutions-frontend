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
        <section className="pt-32">
          <div className="px-20">
            <Breadcrumbs
              useDefaultStyle
              rootLabel="Home"
              useDefaultStyle={false}
              listClassName="flex"
              transformLabel={(
                title
              ) => (
                <span>
                  <span className="px-1">{`${
                    title !== "Home"
                      ? "/"
                      : ""
                  }`}</span>
                  <span className="capitalize">
                    {title.replace(
                      "-",
                      " "
                    )}
                  </span>
                </span>
              )}
            />
          </div>
          <div className="container mx-auto py-20">
            <div>
              <div>
                <h2 className="c-text-title-normal">
                  iSAP Payment
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/h46NAMg7g4M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP Fan Platform
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/nY0dZwnu5Pk"
                  title="YouTube video player"
                  framerBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP Compass App
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/uu9UkuhkEyA"
                  title="YouTube video player"
                  framerBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP Wallet
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/Yx-UNo8eHuo"
                  title="YouTube video player"
                  framerBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP eSIM
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/z4zQm6-ZrsI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  iSAP eID AFIS
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/0WXvFEvU7TE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  eID Facial Recognition
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/r4TGzhEJQu0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h2 className="c-text-title-normal">
                  Atari GamePad
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/ad7t1jXyCEE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
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
