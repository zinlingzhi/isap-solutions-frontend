import React from 'react'

export default function SAP(props) {
  return (
    <section className="bg-trueGray-200 py-5 md:py-10 md-bgc-img bgc-img">
      <div className="padding-box-x box-twoColumn-left box-twoColumn-right">
        <div className="items-start flex flex-wrap">
          <div className="w-full lg:w-1/2 mr-auto text-left">
            <div className="lg:pr-8">
              <h5 className="text-gray-700 font-medium text-2xl">
                Our Success
              </h5>
              <h1 className="text-gray-700 font-extrabold text-4xl mt-1 mb-4">
                SAP HANA Experts
              </h1>
              <div className="bg-gray-700-line h-px-line" />
              <p className="text-gray-700 text-sm font-medium mt-4">
                iSAP Solutions is a
                full-service solution
                provider for essential
                enterprise applications
                and complex ERP
                landscapes For the past
                10 years we assist with
                running stable
                businesses, including
                procedures in finance,
                human resources,
                manufacturing, supply
                chain, services, and
                procurement, using the
                SAP software system. We
                help companies manage
                their data on-premises
                and in the cloud with a
                high-performance
                in-memory database that
                enables powerful
                analytics on multi-model
                data.
              </p>
            </div>
            <div className="items-start flex flex-wrap mt-6">
              <div className="w-full md:w-1/2 items-start flex py-6">
                <img
                  src="/img/process-icon.png"
                  alt="process"
                  className="w-6 object-contain"
                />
                <div className="pl-4">
                  <h5 className="text-gray-700 text-lg font-extrabold">
                    Process
                  </h5>
                  <p className="text-gray-700 text-sm font-medium mt-2">
                    We attach great
                    importance to a
                    clear process
                    description in order
                    to fulfill the SAP
                    Cloud
                    best-to-practice
                    requirement.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 items-start flex py-6">
                <img
                  src="/img/consulting-icon.png"
                  alt="consulting"
                  className="w-6 object-contain"
                />
                <div className="pl-4">
                  <h5 className="text-gray-700 text-lg font-extrabold">
                    Consulting
                  </h5>
                  <p className="text-gray-700 text-sm font-medium mt-2">
                    ISAP Solutions
                    completes the
                    portfolio with its
                    comprehensive
                    consulting and
                    project business,
                    especially in the
                    field of SAP and
                    managed services
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 items-start flex py-6">
                <img
                  src="/img/expertising-icon.png"
                  alt="expertising"
                  className="w-6 object-contain"
                />
                <div className="pl-4">
                  <h5 className="text-gray-700 text-lg font-extrabold">
                    Expertise
                  </h5>
                  <p className="text-gray-700 text-sm font-medium mt-2">
                    iSAP teams are made
                    up of highly trained
                    and experienced
                    specialists with
                    in-depth industry
                    knowledge,
                    intuition, and an
                    eye for the basics
                    and feasibility.
                    This balance is
                    essential for us to
                    provide long-term,
                    high-quality
                    services.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 items-start flex py-6">
                <img
                  src="/img/special-icon.png"
                  alt="special"
                  className="w-6 object-contain"
                />
                <div className="pl-4">
                  <h5 className="text-gray-700 text-lg font-extrabold">
                    Specialization
                  </h5>
                  <p className="text-gray-700 text-sm font-medium mt-2">
                    In the focus of
                    FI-CO with a high
                    individual technical
                    and sector-specific
                    specialization work
                    together in the
                    three segments SAP
                    Solutions /
                    Digitization, ADDONS
                    for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
