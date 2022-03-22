import React from 'react'

export default function Card({
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
      <div className="industry-card-block">
        <div className="w-full width-40 extra-large-50 height-100">
          <div className="c-bg-trueGray-200 padding-box-x box-twoColumn-left pr-20px">
            <h6 className="c-text-body-normal c-text-trueGray-400 pt-15px">
              {route}
            </h6>
            <h5 className="c-text-trueGray-700 title-large py-20px">
              {title}
            </h5>
            <h1 className="c-text-trueGray-400 c-text-title-normal mt-1 mb-4">
              {subTitle}
            </h1>
          </div>

          <div className="box-twoColumn-left padding-box-x pt-15px pr-20px">
            <p className="c-text-trueGray-400 c-text-body-normal">
              {text}
            </p>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4">
              {textSecond}
            </p>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4">
              {textThird}
            </p>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4">
              {textFourth}
            </p>
          </div>
        </div>
        <div className="w-full width-60 padding-box-x box-twoColumn-right">
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
