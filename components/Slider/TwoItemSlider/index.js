import React from "react";
import { Carousel } from "react-bootstrap";
import SliderCard from "../SliderCard";

export default function TwoItemSlider({items}) {
  return (
    <Carousel>
      {items &&
        items.map((item, id) => (
          <Carousel.Item
            key={id + "11"}
            className="padding-box-x box-twoColumn-left box-twoColumn-right relative height-420px"
          >
            <div
              key={id + "22"}
              className="h-72 c-bg-trueGray-700 w-100 slider-item-wrapper"
            ></div>
            <div
              key={id + "33"}
              className="display-flex"
            >
              <SliderCard
                route={item[0].route}
                src={item[0].src}
                alt={item[0].title}
                title={item[0].title}
                text={item[0].text}
              />
              <SliderCard
                route={item[1].route}
                src={item[1].src}
                alt={item[1].title}
                title={item[1].title}
                text={item[1].text}
              />
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
