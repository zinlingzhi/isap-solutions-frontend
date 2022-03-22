import React from 'react';

export default function TwoColorCard({
  title,
  mainText,
  mainTextSecond,
  subTitle,
  subContent,
}) {
  return (
    <section className="box-my-60px">
      <div className="items-start flex flex-wrap">
        <div className="w-full width-40 c-bg-trueGray-100 padding-box-x extra-large-50">
          <div className="pr-20px box-twoColumn-left">
            <h5 className="c-text-trueGray-700 sub-title-text mb-20px">
              {title}
            </h5>
            {mainText && (
              <p className="c-text-trueGray-400 c-text-body-normal mb-20px">
                {mainText}
              </p>
            )}
            {mainTextSecond && (
              <p className="c-text-trueGray-400 c-text-body-normal mb-20px">
                {mainTextSecond}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap c-bg-trueGray-700 padding-box-x p-25px width-100 width-60 box-twoColumn-right extra-large-50">
          {subTitle && (
            <div className="text-white pb-20px">
              {subTitle}
            </div>
          )}
          {subContent &&
            subContent.map((item) => (
              <div
                key={item.key}
                className="w-full flex mb-10px"
              >
                <div className="width-50 flex">
                  <div className="inline-flex relative items-center">
                    <span>
                      <i className="fas fa-check-circle text-lg c-text-trueGray-400"></i>
                    </span>
                    <p className="c-text-white c-text-body-bold pl-10px">
                      {item.left}
                    </p>
                  </div>
                </div>
                {item.right && (
                  <div className="width-50 flex">
                    <div className="inline-flex relative items-center">
                      <span>
                        <i className="fas fa-check-circle text-lg c-text-trueGray-400"></i>
                      </span>
                      <p className="c-text-white c-text-body-bold pl-10px">
                        {item.right}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

