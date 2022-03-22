import React, { useRef } from "react";

export default function InfoCard({
  mainTitle,
  infoBox
}) {
  const arrayLength = infoBox.length % 2

  return (
    <div
      key={mainTitle}
      className="mx-auto box-twoColumn-left box-twoColumn-right"
    >
      <h3 className="sub-title-text padding-box-x text-gray-700 font-extrabold c-3x-title-container c-3x-title">
        {mainTitle}
      </h3>
      <div
        key={mainTitle + 1}
        className="flex flex-wrap padding-box-x o-hidden -m-3x-text c-3x-text"
      >
        {arrayLength === 1
          ? infoBox.map((box, id) => (
              <div
                key={mainTitle + id}
                className="w-3x-text mb-20px mob-max-width"
              >
                <div
                  key={
                    mainTitle + id + 1
                  }
                  className="relative m-3x-text c-bg-trueGray-200 height-100"
                >
                  <h5
                    key={id + 1}
                    className="text-gray-700 text-lg font-extrabold c-3x-sub-title"
                  >
                    {box.title}
                  </h5>
                  <ul
                    key={id + 11}
                    className="c-3x-sub-box mob-max-width"
                  >
                    {box.textBox &&
                      box.textBox.map(
                        (item) => (
                          <li
                            key={
                              item.id
                            }
                          >
                            <p className="c-text-trueGray-400 text-sm font-medium c-3x-sub-title">
                              {
                                item.text
                              }
                            </p>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            ))
          : infoBox.map((box, id) => (
              <div
                key={mainTitle + id + 2}
                className="w-2x-text mb-20px mob-max-width"
              >
                <div
                  key={
                    mainTitle +
                    id +
                    2 +
                    2
                  }
                  className="relative m-3x-text c-bg-trueGray-200 height-100"
                >
                  <h5
                    key={id + 2}
                    className="text-gray-700 text-lg font-extrabold c-3x-sub-title"
                  >
                    {box.title}
                  </h5>
                  <ul
                    key={id + 22}
                    className="c-3x-sub-box"
                  >
                    {box.textBox &&
                      box.textBox.map(
                        (item) => (
                          <li
                            key={
                              item.id
                            }
                          >
                            <p className="c-text-trueGray-400 text-sm font-medium c-3x-sub-title">
                              {
                                item.text
                              }
                            </p>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}