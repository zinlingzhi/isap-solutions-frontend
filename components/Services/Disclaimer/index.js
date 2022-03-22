import { arrow } from "@popperjs/core";
import React from "react";

export default function TextCard({
  title,
  titleFirst,
  textFirst,
  titleSecond,
  textSecond,
  titleThird,
  textThird,
  titleFour,
  textFour,
  titleFive,
  textFive,
  titleSix,
  textSix,
  titleSeven,
  textSeven,
  titleEight,
  textEight,
  titleNine,
  textNine,
  titleTen,
  textTen,
}) {
  return (
    <div className="mt-40px mx-auto padding-box-x box-twoColumn-left box-twoColumn-right">
      <h5 className="c-text-trueGray-700 sub-title-text pt-10px">
        {title}
      </h5>
      <h5 className="c-text-trueGray-400 c-text-body-normal mt-4">
        {title}
      </h5>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFirst}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleSecond}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textSecond}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleThird}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textThird}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleFour}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFour}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleFive}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFive}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleSix}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textSix}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleSeven}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textSeven}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleEight}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textEight}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleNine}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textNine}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {titleTen}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textTen}
      </p>
    </div>
  );
}
