import React from 'react';

export default function OfferCard({title, text}) {
  return (
    <section>
      <div className="industry-card-block items-start display-none tablet desktop flex-wrap mt-40px">
        <div className="w-full width-40 padding-box-x box-twoColumn-left extra-large-50">
          <div className="pr-0 lg:pr-8">
            <h5 className="c-text-trueGray-700 c-text-title-normal">
              {title}
            </h5>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4 pb-20px">
              {text}
            </p>
          </div>
        </div>
        <div className="w-full width-60 c-bg-trueGray-700 padding-box-x box-twoColumn-right extra-large-50">
          <div className="flex flex-wrap relative p-8">
            <div className="pr-0 lg:pr-8">
              <div className="inline-flex">
                <div className="c-text-white text-center mx-8">
                  <div>
                    <span>
                      <i className="fas fa-box-open c-text-trueGray-400 text-6xl"></i>
                    </span>
                  </div>
                  Product Sales
                </div>
                <div className="c-text-white text-center mx-8">
                  <div>
                    <span>
                      <i className="fas fa-map-marked-alt c-text-trueGray-400 text-6xl"></i>
                    </span>
                  </div>
                  Rental Services
                </div>
                <div className="c-text-white text-center mx-8">
                  <div>
                    <span>
                      <i className="fas fa-calendar-alt c-text-trueGray-400 text-6xl"></i>
                    </span>
                  </div>
                  Booking Services
                </div>
                <div className="c-text-white text-center mx-8">
                  <div>
                    <span>
                      <i className="fas fa-comments c-text-trueGray-400 text-6xl"></i>
                    </span>
                  </div>
                  Consulting Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
