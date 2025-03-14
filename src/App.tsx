import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

import { Carousel, T } from "@admiral-ds/react-ui";
import { CarouselTestExample } from "./carouselTestExample";

function App() {
  const items = [
    <img
      key="1"
      src="https://www.fonstola.ru/images/201304/fonstola.ru_92517.jpg"
      alt="placeholder"
    />,
    <img
      key="2"
      src="https://masyamba.ru/картинки-котят/33-милый-котенок.jpg"
      alt="placeholder"
    />,
    <img
      key="3"
      src="https://en.free-wallpapers.su/data/media/2329/big/dog1650.jpg"
      alt="placeholder"
    />,
    <img
      key="4"
      src="https://furman.top/uploads/posts/2023-08/1691005855_furman-top-p-zastavka-na-rabochii-stol-kotiki-krasivo-36.jpg"
      alt="placeholder"
    />,
    <img
      key="5"
      src="https://wp-s.ru/wallpapers/5/1/315816524181182/troe-malenkix-shhenkov-xaski.jpg"
      alt="placeholder"
    />,
    <img
      key="6"
      src="https://www.fonstola.ru/images/201910/fonstola.ru_349629.jpg"
      alt="placeholder"
    />,
  ];

  return (
    <div>
      <T font="Header/HL1" as="p">
        Admiral DS
      </T>
      <div className="card">
        <T font="Subtitle/Subtitle 1" as="p">
          Пример компонента
        </T>
        <CarouselTestExample />
      </div>
    </div>
  );
}

export default App;
