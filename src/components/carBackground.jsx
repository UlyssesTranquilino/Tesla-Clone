import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../style/lg-1024px.css'
import "../../style/sm-640px.css"
import "../../style/xl-1280px.css"


const Car = (props) => {
    const navigate = useNavigate();
    const handleOrderNow = () => {
        const orderPath = `/orderCar?model=${encodeURIComponent(props.model)}&image=${encodeURIComponent(props.image)}&background=${encodeURIComponent(props.background)}&range=${encodeURIComponent(props.range)}&topSpeed=${encodeURIComponent(props.topSpeed)}&time=${encodeURIComponent(props.time)}&index=${encodeURIComponent(props.index)}`;
        
        navigate(orderPath);
        window.scrollTo(0, 0);
    };

    function handleLearnMore() {
        const learnMorePath = props.learnMorePath;

        
        navigate(learnMorePath)
        window.scrollTo(0, 0);
    }

    console.log("PROPS: ", props)

    return (
        <div className="car-bg">
            <div className="car-bg-wall">
                <div className="wall-effect" style={{ background: props.background }}></div>
                <div className="text-bg">
                    <div className="text-bg-text">{props.model.toUpperCase()}</div>
                </div>
            </div>

            <div className="car-bg-floor" style={{ background: props.background }}>
                <div className="home-car">
                    <img src={props.image} alt={props.model} />
                </div>

                <div className="top-title-car">
                    <div className="car-model-name">{props.model}</div>
                    <div className="car-price">
                        <p>From {props.price}</p>
                        <p>After Est. Savings</p>
                    </div>
                </div>
                <div className="car-button">
                    <div className="order">
                        <button className="order-now" onClick={handleOrderNow}>
                            Order Now
                        </button>
                    </div>
                    <div className="demo" onClick={handleLearnMore}>
                        <button className="demo-drive">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;
