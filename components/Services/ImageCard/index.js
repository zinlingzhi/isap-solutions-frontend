import React from "react";

export default function ImageCard({
  route,
  title,
  subTitle,
  text,
  textSecond,
  textThird,
  textFourth,
  src,
  alt,
}) {
  return (
    <section className="nav-menu-mt">
      <div className="industry-card-block wrap-image-card">
        <div className="w-full width-40 extra-large-50">
          <div className="c-bg-trueGray-200 padding-box-x box-twoColumn-left mob-mb--20px pr-20px pb-40px height-100">
            <h6 className="c-text-body-normal c-text-trueGray-400 block-display-none pt-15px">
              {route}
            </h6>
            <h5 className="c-text-trueGray-700 title-large py-20px">
              {title}
            </h5>
            <h1 className="c-text-trueGray-400 c-text-title-normal sub-title-text mt-1 mb-4">
              {subTitle}
            </h1>
            <div className="pt-15px pr-20px">
              <p className="c-text-trueGray-400 c-text-body-normal">
                {text}
              </p>

              {textSecond && (
                <p className="c-text-trueGray-400 c-text-body-normal mt-4">
                  {textSecond}
                </p>
              )}
              {textThird && (
                <p className="c-text-trueGray-400 c-text-body-normal mt-4">
                  {textThird}
                </p>
              )}
              {textFourth && (
                <p className="c-text-trueGray-400 c-text-body-normal mt-4">
                  {textFourth}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full width-60 box-twoColumn-right img-display-none">
          <div className="flex flex-wrap height-100">
            <img
              className="width-100vw width-60vw object-fit-cover"
              src={src}
              alt={alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
