import React from "react";

export default function OneColorCard({
  title,
  mainText,
  subTitle,
  subContent,
}) {
  return (
    <section
      key={title + subContent[0].left}
      className="box-my-60px"
    >
      <div
        key={title + 1}
        className="items-start flex flex-wrap"
      >
        <div
          key={title + 2}
          className="w-full width-40 c-bg-trueGray-100 padding-box-x extra-large-50"
        >
          <div
            key={title + 3}
            className="pr-20px box-twoColumn-left"
          >
            <h5
              key={title + 33}
              className="c-text-trueGray-700 sub-title-text"
            >
              {title}
            </h5>
            <p
              key={title + 333}
              className="c-text-trueGray-400 c-text-body-normal mt-4"
            >
              {mainText}
            </p>
          </div>
        </div>
        <div
          key={title + 4}
          className="flex flex-wrap c-bg-trueGray-700 padding-box-x p-25px width-100 width-60 box-twoColumn-right extra-large-50"
        >
          <div
            key={title + 5}
            className="text-white"
          >
            {subTitle}
          </div>
          {subContent.map(
            (item, id) => (
              <div
                key={item.key}
                className="w-full flex mb-10px"
              >
                <div
                  key={item.key + id}
                  className="inline-flex relative items-center"
                >
                  <span>
                    <i className="fas fa-check-circle text-lg c-text-trueGray-400"></i>
                  </span>
                  <p className="c-text-white c-text-body-bold pl-10px">
                    {item.left}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
