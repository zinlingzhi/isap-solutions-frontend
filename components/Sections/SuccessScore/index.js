import React from 'react'

export default function SuccessScore(props) {
  return (
    <section className="bg-trueGray-200">
      <div className="container mx-auto md:py-10 lg:py-16 relative">
        <span
          className="hidden md:block absolute top-1/2 transform -translate-y-1/2 text-trueGray-300 font-extrabold w-full text-center"
          style={{ fontSize: 200 }}
        >
          Success
          <span className="hidden xl:inline-block">
            &nbsp;score
          </span>
        </span>
        <span
          className="block md:hidden absolute top-1/2 transform -translate-y-1/2 text-trueGray-300 font-extrabold w-full text-center"
          style={{ fontSize: 100 }}
        >
          Success
          <span className="inline-block">
            &nbsp;score
          </span>
        </span>
        <div className="flex flex-wrap px-4 md:px-8 lg:px-44 relative">
          <div className="w-full md:w-1/2 lg:w-1/4 py-4">
            <h4 className="text-center text-6xl font-extrabold text-gray-700">
              388
            </h4>
            <h5 className="text-center uppercase text-lg mt-4 text-gray-700">
              INTERNATIONAL EMPLOYEES
            </h5>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-4">
            <h4 className="text-center text-6xl font-extrabold text-gray-700">
              850
            </h4>
            <h5 className="text-center uppercase text-lg mt-4 text-gray-700">
              HAPPY SAP CLIENTS
            </h5>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-4">
            <h4 className="text-center text-6xl font-extrabold text-gray-700">
              11
            </h4>
            <h5 className="text-center uppercase text-lg mt-4 text-gray-700">
              PROJECTS IN DEVELOPMENT
            </h5>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-4">
            <h4 className="text-center text-6xl font-extrabold text-gray-700">
              12
            </h4>
            <h5 className="text-center uppercase text-lg mt-4 text-gray-700">
              OFFICES AROUND THE GLOBE
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
