import React from 'react'

export default function Team(props) {
  return (
    <section className="bg-gray-100 team-pb-80px">
      <div className="padding-box-x box-twoColumn-left box-twoColumn-right pb-16 pt-20">
        <h5 className="text-center text-2xl text-gray-700 font-medium">
          Leadership
        </h5>
        <h4 className="text-center text-4xl text-gray-700 font-extrabold">
          Team
        </h4>
      </div>
      <div className="padding-box-x team-container bg-gray-100">
        <div className="flex flex-wrap">
          <div className="flex w-full box-twoColumn-left width-40 extra-large-50 mb-20px flex flex-wrap relative c-bg-trueGray-200">
            <img
              className="w-full md:w-1/2 object-cover align-middle relative top-0"
              src="/img/ceo_tin.png"
              alt="ceo"
            />
            <div className="w-full width-40 p-5">
              <h5 className="text-lg font-extrabold text-left text-gray-700">
                Tino Herold
              </h5>
              <h6 className="text-sm font-medium text-left">
                CEO
              </h6>
            </div>
          </div>
          <div className="w-full box-twoColumn-right width-60 extra-large-50 ml-container-card mb-20px md\:my-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-1/2 flex flex-col my--8px">
              <div className="flex-1 my-2 mr-20px bg-trueGray-200 mb-768-20px">
                <div className="flex">
                  <img
                    alt="coo"
                    src="/img/coo_lan.png"
                    className="w-1/2 h-140px"
                  />
                  <div className="w-1/2 p-team-card">
                    <h5 className="text-lg font-extrabold text-left text-gray-700">
                      Lana Turianska
                    </h5>
                    <h6 className="text-sm font-medium text-left">
                      Chief of Operations
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-2 mr-20px bg-trueGray-200">
                <div className="flex">
                  <img
                    alt="cto"
                    src="/img/cmo_far.png"
                    className="w-1/2 h-140px"
                  />
                  <div className="w-1/2 p-team-card">
                    <h5 className="text-lg font-extrabold text-left text-gray-700">
                      Farhad Alizada
                    </h5>
                    <h6 className="text-sm font-medium text-left">
                      CTO
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col my--8px">
              <div className="flex-1 my-2 bg-trueGray-200 mb-768-20px">
                <div className="flex">
                  <img
                    alt="cmo"
                    src="/img/ai_emirhan.png"
                    className="w-1/2 h-140px"
                  />
                  <div className="w-1/2 p-team-card">
                    <h5 className="text-lg font-extrabold text-left text-gray-700">
                      Emirhan Bulut
                    </h5>
                    <h6 className="text-sm font-medium text-left">
                      Head AI Devision
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-2 md:my-0 bg-trueGray-200">
                <div className="flex">
                  <img
                    alt="Victoria Kurdumova"
                    src="/img/dir_vik.png"
                    className="w-1/2 h-140px"
                  />
                  <div className="w-1/2 p-team-card">
                    <h5 className="text-lg font-extrabold text-left text-gray-700">
                      Victoria Kurdumova
                    </h5>
                    <h6 className="text-sm font-medium text-left">
                      Director Russia
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/4 md:px-8 lg:px-2 lg:mt-0 flex flex-wrap lg:flex-nowrap">
                <div className="w-full my-2 md:my-0">
                  <div className="pt-4 pl-4 flex flex-col overflow-hidden h-full bg-trueGray-200">
                    <div className="h-1/4">
                      <h5 className="text-lg font-extrabold text-left text-gray-700">
                        Victoria
                        Kurdumova
                      </h5>
                      <h6 className="text-sm font-medium text-left">
                        Director Russia
                      </h6>
                    </div>
                    <div className="ml-auto h-3/4">
                      <img
                        alt="..."
                        src="/img/victoria.png"
                        className="h-full max-h-80"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </section>
  );
}
