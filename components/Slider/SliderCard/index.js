import React from 'react';
import Link from "next/link";

export default function SliderCard({
  route,
  src,
  title,
  text,
}) {
  return (
    <Link href={route}>
      <div key={title} className="relative flex flex-col min-w-0 break-words bg-trueGray-200 w-full transform-minimize-scale mx-10px">
        <img
          alt={title}
          src={src}
          className="w-full h-72 object-cover	align-middle"
        />
        <div key={text} className="px-4 py-5-mini flex-auto">
          <h6 className="mt-4 text-lg font-extrabold text-left text-gray-700">
            {title}
          </h6>
          <p className="mt-2 mb-4 text-trueGray-400 text-sm text-left">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}
