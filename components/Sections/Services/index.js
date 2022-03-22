import React from 'react';
import Link from "next/link";

export default function Services(props) {
  return (
    <section className="py-5 md:py-10">
      <div className="padding-box-x box-twoColumn-left box-twoColumn-right">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mr-auto text-left">
            <div className="pr-8">
              <h5 className="text-gray-700 font-medium text-2xl">
                Our Services
              </h5>
              <h1 className="text-gray-700 font-extrabold text-4xl mt-1 mb-4">
                Solutions & Assistance
              </h1>
              <div className="bg-trueGray-400 h-px" />
              <p className="text-gray-700 text-sm font-medium mt-4">
                Discover the finest
                solutions for your
                processes, tasks, and
                goals by working with
                us. Allow us to help you
                with your company's
                needs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 mx--16px">
          <Link href="services/sap">
            <div className="w-full md:w-1/2 lg:w-1/3 md:pt-0 md:px-2 lg:px-4 text-center box-pt-40px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="SAP"
                  src="/img/our_services/sap.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    SAP
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    We implement new SAP
                    systems in
                    organizations of all
                    sizes and
                    industries.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    Our expert
                    consulting services
                    are tailored to the
                    legal,
                    organizational, and
                    technical needs of
                    the global real
                    estate and financial
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="services/java_development">
            <div className="w-full md:w-1/2 lg:w-1/3 pt-4 md:px-2 lg:px-4 text-center box-pt-24px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="Java Development"
                  src="/img/our_services/java_development.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    Java Development
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    Our Java software
                    development services
                    will assist your
                    company in achieving
                    increased security
                    while lowering
                    running costs.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    We will optimize and
                    scale app
                    development without
                    having to worry
                    about
                    infrastructure,
                    regardless of the
                    size and scope of
                    your project.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="services/web_development">
            <div className="w-full md:w-1/2 lg:w-1/3 md:pt-0 lg:pt-8 md:px-2 lg:px-4 text-center box-pt-24px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="WEB & Marketplace
                      Development"
                  src="/img/our_services/web_development.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    WEB & Marketplace
                    Development
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    We will work with
                    your business to
                    overcome the
                    problems that B2B
                    companies face when
                    creating online
                    marketplaces.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    With our assistance
                    in digitization
                    companies are
                    achieving things in
                    the B2B commerce
                    market that seem to
                    be previously
                    unachievable.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="services/projectmanagement">
            <div className="w-full md:w-1/2 lg:w-1/3 md:pt-4 lg:pt-0 md:px-2 lg:px-4 text-center box-pt-24px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="Project Management"
                  src="/img/our_services/project_management.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    Project Management
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    Let us help you to
                    shape a workflow
                    that will match your
                    team's needs.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    We can secure a
                    high-quality project
                    delivery and
                    well-organized
                    processes by using
                    methods that are
                    perfectly suited to
                    your company.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="services/itoutsource">
            <div className="w-full md:w-1/2 lg:w-1/3 md:pt-0 lg:pt-4 md:px-2 lg:px-4 text-center box-pt-24px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="IT Outsourcing and
                      Services"
                  src="/img/our_services/it_outsourcing.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    IT Outsourcing and
                    Services
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    Allow us to build a
                    high-performing team
                    that is tailored to
                    your demands at a
                    cost-effective rate.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    We will recruit and
                    engage professionals
                    for your remote or
                    offshore team,
                    regardless of size
                    or industry.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="services/host">
            <div className="w-full md:w-1/2 lg:w-1/3 md:pt-4 lg:pt-8 md:px-2 lg:px-4 text-center box-pt-24px">
              <div className="relative text-overflow flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-scale">
                <img
                  alt="Hosting & Cloud"
                  src="/img/our_services/hosting_cloud.png"
                  className="w-full h-72 object-cover	align-middle"
                />
                <div className="px-4 py-5-mini flex-auto height-212px">
                  <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700 after-content">
                    Hosting & Cloud
                  </h6>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
                    With our cloud
                    services, you can
                    securely manage even
                    the most
                    resource-intensive
                    projects.
                  </p>
                  <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left h-16 text-overflow">
                    Our cloud servers
                    are stored in our
                    own state-of-the-art
                    Data Centers in
                    Ukraine and Germany.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
