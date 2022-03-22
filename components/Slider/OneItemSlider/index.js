import React from "react";
import { Carousel } from "react-bootstrap";
import SliderCard from "../SliderCard";

export default function OneItemSlider({ items }) {
  return (
    <Carousel>
      {items.map((item, id) => (
        <Carousel.Item
        key={id}
        className="padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw height-420px">
        <div key={item.id + "1"} className="h-72 c-bg-trueGray-700 w-100 slider-item-wrapper"
        ></div>
          <div key={item.id + "2"} className="display-flex">
            <SliderCard
            key={item.id + "3"}
            route={item.route}
            src={item.src}
            alt={item.title}
            title={item.title}
            text={item.text}
          />
        </div>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}
