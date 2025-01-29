import React, { useCallback } from "react";

import Vehicles from "../components/vehicles";
import CarBackground from "../components/carBackground";
import CarContent from "../components/carContent";
import CarPaint from "../components/Car Paints/CarPaint";

import { createRoot } from "react-dom/client";
import data from "../components/data";

const Home = () => {
  const carCards = data
    .filter((item, index) => index >= 0 && index <= 1)
    .map((item) => {
      return (
        <div
          className="car-cards d-flex mx-auto justify-items-center "
          key={item.model}
        >
          <div className="col">
            {/* <CarContent
                image={item.image}
              /> */}
            <CarBackground
              model={item.model}
              price={item.price}
              background={item.background}
              image={item.image}
              range={item.range}
              topSpeed={item.topSpeed}
              time={item.time}
              index={item.index}
              wallBG={item.wallBG}
              learnMorePath={item.learnMorePath}
            />
          </div>
        </div>
      );
    });

  return (
    <div className="container-fluid d-fle flex-coloumn align-items-center mx-auto justify-items-center">
      <div className="">
        <div className="col">
          <Vehicles />
        </div>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "black" }}
      >
        {carCards}
      </div>

      {/* <div>{carCards}</div> */}
    </div>
  );
};

export default Home;
