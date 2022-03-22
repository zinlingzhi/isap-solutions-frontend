import React from 'react';
import { Carousel } from 'react-bootstrap';
import SliderCard from './SliderCard'

export default function Slider({items}) {
  return (
    <Carousel>
      {items &&
        items.map((item, id) => (
          <Carousel.Item
            key={id + "111"}
            className="padding-box-x box-twoColumn-left box-twoColumn-right height-420px relative width-100vwp"
          >
            <div
              key={id + "222"}
              className="h-72 c-bg-trueGray-700 w-100 slider-item-wrapper"
            ></div>
            <div
              key={id + "333"}
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
              <SliderCard
                route={item[2].route}
                src={item[2].src}
                alt={item[2].title}
                title={item[2].title}
                text={item[2].text}
              />
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}