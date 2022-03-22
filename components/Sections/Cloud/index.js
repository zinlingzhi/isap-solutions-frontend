import React from 'react'

export default function Cloud(props) {
  return (
    <section className="overflow-hidden bg-trueGray-200">
      <div className="items-start flex flex-wrap w-full ">
        <div className="padding-box-x box-twoColumn-left my-auto mx-auto bg-trueGray-200 relative">
          <div className="flex flex-wrap p-cloud-20px">
            <div className="w-full text-center">
              <h5 className="text-gray-700 font-medium text-lg">
                iSAP Data Center
              </h5>
              <h1 className="text-gray-700 font-extrabold text-4xl mt-1 mb-30px">
                Cloud
              </h1>
            </div>
            <div className="w-full text-center">
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                Top server hardware
              </p>
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                Highly secure facility
              </p>
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                Quantum technology
              </p>
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                SAP, WEB, Gaming hosting
              </p>
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                Cost-effective
              </p>
              <p className="text-gray-700 text-sm font-medium py-4-mini">
                Efficient
              </p>
            </div>
          </div>
        </div>
        <div className="width-55vw box-twoColumn-right ml-auto bg-trueGray-200 relative">
          <img
            className="width-100vw"
            src="/img/cloud_1.gif"
            alt="cloud-gif"
          />
        </div>
      </div>
    </section>
  );
}
