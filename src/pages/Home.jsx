import React, { useCallback } from 'react'

import Vehicles from '../components/vehicles';
import CarBackground  from '../components/carBackground';
import CarContent from '../components/carContent';
import CarPaint from '../components/Car Paints/CarPaint';

import { createRoot } from 'react-dom/client';
import data from "../components/data";

const Home = () => {

  console.log("CHEckds");
  const carCards = data.map((item => {
    return (
          <div className='car-cards'>
            <div className='col'>
              {/* <CarContent
                image={item.image}
              /> */}
              <CarBackground
                model = {item.model}
                price = {item.price}
                background = {item.background}
                image = {item.image}
                range = {item.range}
                topSpeed = {item.topSpeed}
                time = {item.time}
                index = {item.index}
                wallBG = {item.wallBG}
                learnMorePath = {item.learnMorePath}
                />
            </div>
          </div>
    )
  }))

  return (
    <div className='container-fluid'>
        <div className='car-cards'>
            <div className='col'>
                <Vehicles/>
            </div>
        </div>
    {carCards}
  </div>
  )
}

export default Home