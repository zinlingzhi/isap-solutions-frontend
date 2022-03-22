import { arrow } from '@popperjs/core';
import React from 'react';

export default function TextCard({
  title,
  textFirst,
  textSecond,
  textThird,
  textFour,
  textFive
}) {
  return (
    <div className="mt-40px mx-auto padding-box-x box-twoColumn-left box-twoColumn-right">
      <h5 className="c-text-trueGray-700 sub-title-text">
        {title}
      </h5>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFirst}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textSecond}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textThird}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFour}
      </p>
      <p className="c-text-trueGray-400 c-text-body-normal mt-4">
        {textFive}
      </p>
    </div>
  );
}
