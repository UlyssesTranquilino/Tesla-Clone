import React, { useState, useEffect, useRef, useContext } from "react";
import "../../style/order-car-page.css";
import { useLocation } from "react-router-dom";

import dataButton from "../components/Data Button/dataButton";
import Buttons from "../components/Data Button/buttons";

import { Model3Specs } from "../App.jsx";
// Data Paint
import dataCarPaint from "../components/Car Paints/dataCarPaint";

//CSS
import "./Model 3 Responsive/Model3.css";
import "./Model 3 Responsive/xs-475.css";
import "./Model 3 Responsive/sm-640.css";
import "./sm-640pxModel3.css";
import "./Model 3 Responsive/md-768.css";
import "./Model 3 Responsive/lg-992.css";

//GSAP
import gsap from "gsap";
import "../components/GsapAnimations/Model3Gsap.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import videoFile from "../../../car/Images/Model 3/Two New Colors.mp4";
import videoFile2 from "../../../car/Images/Model 3/Upgraded Wheels.webm";
import videoFile3 from "../../../car/Images/Model 3/Model Interior Larger.webm";

import vidPremiumMaterials from "../../../car/Images/Model 3/Premium Materials.mp4";
import vidSublimeSound from "../../../car/Images/Model 3/Sublime Sound.webm";
import vidRearDisplay from "../../../car/Images/Model 3/Rear Display.webm";
import vidVentilatedSeats from "../../../car/Images/Model 3/Ventilated Seats.webm";
import vidWirelessCharging from "../../../car/Images/Model 3/Wireless Charging.webm";

//Ninth Section Images
import Slide1Charging from "../../../car/Images/Model 3/Model-3-Charging-Slide-1-Desktop.png";
import Slide2Charging from "../../../car/Images/Model 3/Model-3-Charging-Slide-2-Desktop.png";
import Slide3Charging from "../../../car/Images/Model 3/Model-3-Charging-Slide-3-Desktop.png";

import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

//SPECS COMPONENT
import SpecsComponent from "./Car Data Specs/SpecsComponent.jsx";
import CarSpecs from "./Car Data Specs/CarSpecs.jsx";

const Model3 = () => {
  //Scroll Ref
  const orderRef = useRef(null);

  // useEffect(() => {
  //   const element = orderRef.current;
  //   console.log("Element: ", element);

  //   gsap.to('.orderNow', {
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: element,
  //       // markers: false,
  //       // markers: {
  //       //   fontSize: "2rem",
  //       //   startColor: "white",
  //       //   endColor: "white"
  //       // },
  //       start: "top 70%",
  //       end: "top 70%",
  //       toggleActions: "play none reverse none"
  //        //play pause resume reverse restart reset complete none
  //       //onEnter   onLeave   onEnterBack  onLeaveBack
  //     },
  //     opacity: 1

  //   })

  // }, [])

  const model3Specs = CarSpecs[0];

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play();
    }
  }, []);

  const [allModeBackground, setAllModeBackground] = useState([
    "url('../../Images/Model 3/Dog Mode lg.png')",
    "url('../../Images/Model 3/Camp Mode.png')",
    "url('../../Images/Model 3/Sentry Mode.png')",
  ]);
  const [allSlideCharing, setAllSlideCharging] = useState([
    {
      id: 1,
      image: Slide1Charging,
      title: "At Home",
      description: "Our most convenient and affordable way to charge.",
      isActive: true,
    },
    {
      id: 2,
      image: Slide2Charging,
      title: "On the Road",
      description:
        "Add up to 175 miles in just 15 minues at one of 50,000+ global Superchargers.",
      isActive: false,
    },
    {
      id: 3,
      image: Slide3Charging,
      title: "Where you Park",
      description:
        "Plug in at your destination whether it's a hotel, park or somewhere else.",
      isActive: false,
    },
  ]);
  const [currentModeBackground, setCurrentModeBackground] = useState(
    allModeBackground[0]
  );

  //Window Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setAllModeBackground([
          "url('../../Images/Model 3/Dog Mode lg.png')",
          "url('../../Images/Model 3/Camp Mode lg.png')",
          "url('../../Images/Model 3/Sentry Mode lg.png')",
        ]);
        setCurrentModeBackground(allModeBackground[0]);
      } else {
        setAllModeBackground([
          "url('../../Images/Model 3/Dog Mode.png')",
          "url('../../Images/Model 3/Camp Mode.png')",
          "url('../../Images/Model 3/Sentry Mode.png')",
        ]);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSlideCharging(num) {
    const newArray = allSlideCharing.map((item, index) => {
      if (num === index) {
        item.isActive = item.isActive ? !item.isActive : item.isActive;
        return { ...item, isActive: !item.isActive };
      } else if (item.isActive) {
        return { ...item, isActive: false };
      } else {
        return item;
      }
    });
    setAllSlideCharging(newArray);
  }

  const slideChargingCards = () => {
    return allSlideCharing.map((currentSlide, index) => {
      return (
        <div
          key={currentSlide.id}
          onClick={() => toggleSlideCharging(index)}
          style={{
            color: currentSlide.isActive
              ? "rgb(255, 255, 255)"
              : "rgb(150, 150, 150)",
          }}
        >
          <hr
            className="line"
            style={{
              backgroundColor: currentSlide.isActive
                ? "rgb(255, 255, 255)"
                : "rgb(150, 150, 150)",
            }}
          ></hr>
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.description}</p>
        </div>
      );
    });
  };

  const [isButtonActive, setIsButtonActive] = useState([true, false]);
  const [isButtonModeActive, setIsButtonModeActive] = useState([
    true,
    false,
    false,
  ]);

  //Ninth Section

  const [currentSlideCharging, setCurrentSlideCharging] = useState();

  useEffect(() => {
    setCurrentModeBackground(
      allModeBackground[isButtonModeActive.findIndex((item) => item)]
    );
  }, [isButtonActive, isButtonModeActive, currentModeBackground]);

  function buttonToggle(num) {
    const newArray = [];
    isButtonActive.map((item, index) => {
      if (num === index) {
        item = item ? !item : item;
        newArray.push(!item);
      } else if (item) {
        newArray.push(!item);
      } else newArray.push(item);
    });

    setIsButtonActive(newArray);
  }

  function buttonModeToggle(num) {
    const newArray = isButtonModeActive.map((item, index) => {
      if (num === index) {
        item = item ? !item : item;
        return !item; // Toggle the clicked button
      } else if (item) {
        return false; // Deactivate other active buttons
      } else {
        return item; // Keep inactive buttons as is
      }
      useEffect(() => {
        setCurrentModeBackground(allModeBackground[num]);
      }, [currentModeBackground]);
    });

    setIsButtonModeActive(newArray);
  }
  return (
    <section className="car-page-model3">
      <div className="order-now-button" ref={orderRef}>
        <button className="orderNow">Order Now</button>
      </div>
      <div className="container-fluid order-container-page">
        <div className="row main-section">
          <div className="col">
            <div className="row end-main">
              <div className="car-details">
                <div className="col car-title m-12">Model 3</div>

                <div className="col car-desc m-12">
                  <p className="apr">1.99% APR Financing</p>
                  <p>From $34,9901</p>
                </div>
              </div>

              <div className="car-stats">
                <div className="row stats-row">
                  <div className="col">
                    <h1>15min</h1>
                    <p>
                      Recharge up to 175 miles<sup>2</sup>
                    </p>
                  </div>

                  <div className="col">
                    <h1>363mi</h1>
                    <p>Range (EPA est.)</p>
                  </div>

                  <div className="col">
                    <h1>AWD</h1>
                    <p>Dula Motor</p>
                  </div>
                </div>

                <div className="buttons-main-model3 button-order">
                  <button className="order-now-model3">Order Now</button>
                  <button className="demo-drive-model3">Demo Drive</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row second-section">
          <div className="col distance">
            <div className="row">
              <div className="distance-details">
                <h1>Build for Distance</h1>
                <p>
                  Go up to 363 miles (EPA est.) on a single charge with updated
                  exterior styling optimized for maximum aerodynamics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row third-section">
          <div className="col distance">
            <div className="vid-third">
              {isButtonActive[0] ? (
                <>
                  <video
                    key="video1"
                    ref={videoRef}
                    autoPlay
                    control
                    loop
                    className="background-video-model3 two-newColors"
                  >
                    <source src={videoFile} type="video/mp4" />
                  </video>
                </>
              ) : (
                <>
                  <video
                    key="video2"
                    ref={videoRef}
                    autoPlay
                    control
                    loop
                    className="background-video-model3 upgraded-wheels"
                  >
                    <source src={videoFile2} type="video/mp4" />
                  </video>
                </>
              )}
            </div>
            <div className="third-container">
              <div className="third">
                <div className="model3-buttons">
                  <button
                    className="two-new-colors-btn"
                    onClick={() => buttonToggle(0)}
                    style={{
                      backgroundColor: isButtonActive[0] ? "white" : "gray",
                    }}
                  ></button>
                  <button
                    className="upgraded-wheels-btn"
                    onClick={() => buttonToggle(1)}
                    style={{
                      backgroundColor: isButtonActive[1] ? "white" : "gray",
                    }}
                  ></button>
                </div>

                <div className="caption-model3-buttons">
                  {isButtonActive[0] ? (
                    <>
                      <h1>Two New Colors</h1>
                      <p>
                        Stealth Grey and Ultra Red are designed to change with
                        the light and viewing angle.
                      </p>
                    </>
                  ) : (
                    <>
                      <h1>Upgraded Wheels</h1>
                      <p>
                        Enjoy new styling, increased range and less noise with
                        upgraded tires and wheels.
                      </p>
                    </>
                  )}
                </div>

                <div className="all-new-interior">
                  <h1>All-New Interior</h1>
                  <p>
                    Settle into an all-new interior, featuring a wraparound
                    styling that cocoons you inside. Customize ambient lighting
                    to make it your own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vid-interior">
          <video
            ref={videoRef}
            autoPlay
            control
            loop
            className="background-video-model-interior"
          >
            <source src={videoFile3} type="video/mp4" />
          </video>
        </div>

        <div className="row fourth-section">
          <div className="carousel-vid">
            <div className="carousel-vid">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>

                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>

                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>

                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>

                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <video
                      key="vidPremiumMaterials"
                      ref={videoRef}
                      autoPlay
                      controls
                      loop
                      className="background-video-model4"
                    >
                      <source src={vidPremiumMaterials} type="video/mp4" />
                    </video>

                    <div className="carousel-caption">
                      <h3>Premium Materials</h3>

                      <p>
                        Immerse yourself in softer, more sophisticated
                        materials-executed with an elevated level of precision
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <video
                      key="vidSublimeSound"
                      ref={videoRef}
                      autoPlay
                      controls
                      loop
                      className="background-video-model4"
                    >
                      <source src={vidSublimeSound} type="video/mp4" />
                    </video>

                    <div className="carousel-caption">
                      <h3>Sublime Sound</h3>

                      <p>
                        Enjoy more immersive sound with an audio system designed
                        by Tesla, with up to 17 speakers, dual subwoofers and
                        dual amplifiers.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <video
                      key="vidEearDisplay"
                      ref={videoRef}
                      autoPlay
                      controls
                      loop
                      className="background-video-model4"
                    >
                      <source src={vidRearDisplay} type="video/mp4" />
                    </video>

                    <div className="carousel-caption">
                      <h3>Rear Display</h3>

                      <p>
                        Rear passengers have access to an 8" touchscreen with
                        climate controls and entertainment.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <video
                      key="vidVentilatedSeats"
                      ref={videoRef}
                      autoPlay
                      controls
                      loop
                      className="background-video-model4"
                    >
                      <source src={vidVentilatedSeats} type="video/mp4" />
                    </video>

                    <div className="carousel-caption">
                      <h3>Ventilated Seats</h3>

                      <p>
                        Ventilate your front seats from your phone ahead of time
                        or set them to adjust automatically with climate
                        controls.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <video
                      key="vidWirelessCharging"
                      ref={videoRef}
                      autoPlay
                      controls
                      loop
                      className="background-video-model4"
                    >
                      <source src={vidWirelessCharging} type="video/mp4" />
                    </video>

                    <div className="carousel-caption">
                      <h3>Wireless Charging</h3>

                      <p>
                        Charge your phones at the same time and enjoy
                        crystal-clear calls thanks to an upgraded microphone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row fifth-section">
          <div className="col distance">
            <div className="row">
              <div className="img-cabin">
                <div className="cabin">
                  <h3>A Quieter Cabin</h3>
                  <p>
                    Enjoy a whisper-quiet cabin, thanks to 360-degree acoustic
                    glass. Take in the sky underneath an all-glass roof that
                    lets in light while protecting you from harmful UV rays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row seventh-section">
          <div className="col distance">
            <div className="row">
              <div className="tech">
                <h3>Elegant Technology</h3>
                <p>
                  Your favorite game, movie or song is just a few taps away. Use
                  the center touchscreen to stream media, customize your
                  vehicle, navigate to your destination and more.
                </p>
              </div>

              <div className="elegant-tech-img">
                <img
                  src="../../Images/Model 3/Model 3 Tech.png"
                  alt="Model 3 Tech"
                />
              </div>
            </div>

            <div className="phone-tech">
              <h3>Remote Access</h3>
              <p>Control everything from one do-it-all Tesla app.</p>
            </div>

            <div className="row phones-row">
              <div className="img-tech">
                <div className="phone-img-tech">
                  <img
                    src="../../Images/Model 3/Model 3 Phone 1.png"
                    alt="Model 3 Tech"
                  />
                </div>
                <div className="caption-img">
                  <h3>Controls</h3>
                  <p>Remotely access and manage your vehicle.</p>
                </div>
              </div>

              <div className="img-tech">
                <div className="phone-img-tech">
                  <img
                    src="../../Images/Model 3/Model 3 Phone 2.png"
                    alt="Model 3 Tech"
                  />
                </div>

                <div className="caption-img">
                  <h3>Cabin Preconditioning</h3>
                  <p>Pre-heat or cool your cabin from anywhere.</p>
                </div>
              </div>

              <div className="img-tech">
                <div className="phone-img-tech">
                  <img
                    src="../../Images/Model 3/Model 3 Phone 3.png"
                    alt="Model 3 Tech"
                  />
                </div>
                <div className="caption-img">
                  <h3>Charging</h3>
                  <p>Plan your route with charging stops.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row eighth-section"
          style={{ backgroundImage: currentModeBackground }}
        >
          <div className="col distance">
            <div className="row">
              <div className="title-eighth-section">
                <h1>Choose Your Mode</h1>
              </div>

              <div className="third-section-details eight-position-details">
                <div className="model3-buttons-content-mode">
                  <div className="model3-buttons-mode">
                    <button
                      className="two-new-colors-btn"
                      onClick={() => buttonModeToggle(0)}
                      style={{
                        backgroundColor: isButtonModeActive[0]
                          ? "white"
                          : "gray",
                      }}
                    ></button>
                    <button
                      className="upgraded-wheels-btn"
                      onClick={() => buttonModeToggle(1)}
                      style={{
                        backgroundColor: isButtonModeActive[1]
                          ? "white"
                          : "gray",
                      }}
                    ></button>

                    <button
                      className="upgraded-wheels-btn"
                      onClick={() => buttonModeToggle(2)}
                      style={{
                        backgroundColor: isButtonModeActive[2]
                          ? "white"
                          : "gray",
                      }}
                    ></button>

                    <div className="info-eighth-position">
                      {isButtonModeActive[0] && (
                        <>
                          <h1>Dog Mode</h1>
                          <p>
                            Keep your furry friends comfortable whie you're away
                            from your vehicle.
                          </p>
                        </>
                      )}

                      {isButtonModeActive[1] && (
                        <>
                          <h1>Camp Mode</h1>
                          <p>
                            Maintain cabin temperature and keep the
                            entertainment system overnight.
                          </p>
                        </>
                      )}

                      {isButtonModeActive[2] && (
                        <>
                          <h1>Sentry Mode</h1>
                          <p>
                            Monitor your vehicle's surroundings and receive
                            alerts of potential threats to your phone.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ninth-section">
          <div className="col distance">
            <div className="charging-title-section">
              <h3>Convenient Charging</h3>
              <p>Fast, accessible, easy—anywhere with electricity</p>
            </div>

            <div className="active-image-section">
              {allSlideCharing.map((item) => {
                if (item.isActive) {
                  return <img src={item.image} alt="Car Charging" />;
                }
              })}
            </div>

            <div className="row-image-section">{slideChargingCards()}</div>
          </div>
        </div>

        <div className="row tenth-section">
          <div className="demo-title-section">
            <h3>Demo Drive Model 3</h3>
            <p>Enter a zip code to find Tesla showrooms near you: </p>
          </div>

          <div className="col distance tenth-main">
            <div className="form">
              <form className="form-group">
                <label for="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  class="form-control"
                  required
                ></input>
              </form>

              <div className="submit-zip">
                <button>Next</button>
              </div>
            </div>

            <img
              src="../../Images/Model 3/Zip Part.png"
              alt="Model 3"
              className="zip-image"
            />
          </div>
        </div>

        <div className="row eleventh-section">
          <div className="col distance">
            <div className="engineered-image">
              <img src="../../Images/Model 3/Engineered.png" alt="Model 3" />

              <div className="parts-section">
                <div className="rigid">
                  <div className="line-rigid-1"></div>
                  <h3 className="line-features">Rigid Structure</h3>
                </div>

                <div className="impact">
                  <div className="line-rigid-2"></div>
                  <h3 className="line-features">Impact Protection</h3>
                </div>

                <div className="roll">
                  <h3 className="line-features">Very Low Rollover Risk</h3>
                  <div className="line-rigid-3"></div>
                </div>
              </div>
            </div>

            <div className="engineered-title-section">
              <h3>Engineered for Safety</h3>
              <p>
                Model 3 benefits from the same features that make our other
                vehicles so safe: energy-absorbing side sills, a fortified
                battery pack mounted low in the vehicle to reduce rollover risk
                and a metal body structure that can withstand many times the
                car’s weight. Active safety features like automatic emergency
                braking come standard.
              </p>
            </div>
          </div>
        </div>

        <div className="row twelfth-section">
          <div className="col distance">
            <div className="arrive-image">
              <img src="../../Images/Model 3/ArriveFresh.jpg" />
            </div>

            <div className="features-refresh">
              <div>
                <h3>360°</h3>
                <p>Degrees of Visibility</p>
              </div>

              <div>
                <h3>Vision</h3>
                <p>Tesla Vision</p>
              </div>

              <div>
                <h3>250m</h3>
                <p>Powerful Visual Procesing</p>
              </div>
            </div>

            <div className="arrive-refresh">
              <h3>Arrive Refreshed</h3>

              <p>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly. 
              </p>
            </div>
          </div>
        </div>

        <div className="row thirteenth-section">
          <div className="col distance">
            <SpecsComponent value={model3Specs} />
          </div>
        </div>

        <div className="row fourteenth-section">
          <div className="col distance"></div>
        </div>

        <div className="order-model3">
          <div className="model3-order">
            <h1>Model 3</h1>
            <p>
              Design yours or get a trade-in estimate for your current vehicle.
            </p>
          </div>

          <div className="buttons">
            <button>Order Now</button>
            <button>Get an Estimate</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model3;
