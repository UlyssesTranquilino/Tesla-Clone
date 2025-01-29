import React, { useState, useEffect, useRef } from "react";
import "../../style/order-car-page.css";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/buttonCard.css";
import dataButton from "../components/Data Button/dataButton";
import Buttons from "../components/Data Button/buttons";

// Data Paint
import dataCarPaint from "../components/Car Paints/dataCarPaint";
import "../components/Car Paints/CarPaint.css";
import "../components/Car Paints/CarPaintLarge.css";
//CSS
import "../../style/sm-640px.css";

const OrderCar = (props) => {
  //Check Width
  const LAPTOP_WIDTH = 991; // Example width in pixels

  // State to hold the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toRender, setToRender] = useState(null);

  // Effect to update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine if the current width is larger than the laptop width
  const isLargerThanLaptop = windowWidth > LAPTOP_WIDTH;

  const videoRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const model = queryParams.get("model");
  const image = queryParams.get("image");
  const background = queryParams.get("background");
  const range = queryParams.get("range");
  const topSpeed = queryParams.get("topSpeed");
  const time = queryParams.get("time");
  const index = queryParams.get("index");

  const [showCard, setShowCard] = useState(dataButton[index].buttons[0]);
  const [carButtons, setCarButtons] = useState(showCard.buttonsLabel);

  const [isChecked, setIsChecked] = useState(true);
  const [currentModel, setCurrentModel] = useState(dataCarPaint[index]);
  const [currentPaint, setCurrentPaint] = useState(currentModel.colors[0]);

  const [currentWheelType, setCurrentWheelType] = useState("WheelOne");
  const [currentWheel, setCurrentWheel] = useState(currentPaint.Wheel.WheelOne);
  const [paintButtons, setPaintButtons] = useState(
    currentModel.colors.map((color) => color.isActive)
  );
  const [activeWheel, setActiveWheel] = useState(
    currentModel.wheel.map((wheel) => wheel.isActive)
  );
  const [interiorColor, setInteriorColor] = useState(
    currentModel.Interior.map((interior) => interior.isActive)
  );
  const [isChargingChecked, setIsChargingChecked] = useState([true, true]);
  const [accessories, setAccessories] = useState(currentModel.accessories);
  const [isAccessoriesChecked, setIsAccessoriesChecked] = useState(
    accessories.map((item) => item.isActive)
  );

  const backgroundEffectColors = [
    {
      color: "Ultra Red",
      bakground:
        "radial-gradient(circle at center top, rgb(255, 39, 39) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(124,0,0,1) 64%, rgba(43,0,0,1) 86%, rgba(0,0,0,1) 100%)",
    },
    {
      color: "Deep Blue Metallic",
      background:
        "radial-gradient(circle at center top, rgb(0, 38, 255) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0, 38, 255) 64%, rgba(0,0,43,1) 86%, rgba(0,0,0,1) 100%)",
    },
    {
      color: "Pearl White Multi-Coat",
      background:
        "radial-gradient(circle at center top, rgb(255, 255, 255) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(235, 235, 235) 24%, rgb(77, 77, 77) 76%, rgba(0,0,0,1) 100%)",
    },
    {
      color: "Solid Black",
      background:
        "radial-gradient(circle at center top, rgb(24, 24, 24) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(48, 48, 48) 24%, rgb(5, 5, 5) 76%, rgba(0,0,0,1) 100%)",
    },
    {
      color: "Lunar Silver",
      background:
        "radial-gradient(circle at center top, rgb(73, 73, 73) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(129, 129, 129) 24%, rgb(77, 77, 77) 76%, rgba(0,0,0,1) 100%)",
    },
    {
      color: "Stealth Gray",
      background:
        "radial-gradient(circle at center top, rgb(48, 48, 48) 5%, rgb(0, 0, 0) 90%)",
      background2:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(48, 48, 48) 24%, rgb(27, 27, 27) 76%, rgba(0,0,0,1) 100%)",
    },
  ];

  const [backgroundEffect, setBackgroundEffect] = useState(
    backgroundEffectColors[0].background
  );
  const [sideBackgroundEffect, setSideBackgroundEffect] = useState(
    backgroundEffectColors[0].background2
  );

  useEffect(() => {
    setCurrentModel(dataCarPaint[index]);
    setCurrentPaint(dataCarPaint[index].colors.find((color) => color.isActive));
  }, [index]);

  useEffect(() => {
    if (currentPaint) {
      setCurrentWheel(currentPaint.Wheel[currentWheelType]);
    }
  }, [currentPaint, currentWheelType]);

  const buttonToggle = (id) => {
    const selectedCard = dataButton[index].buttons.find(
      (card) => card.data === id
    );
    if (selectedCard) {
      setShowCard(selectedCard);
      setCarButtons(selectedCard.buttonsLabel);
    }
  };

  const toggleBorder = (index) => {
    setCarButtons((prevCarButtons) =>
      prevCarButtons.map((button) =>
        button.id === index ? { ...button, on: true } : { ...button, on: false }
      )
    );
  };

  const allButtons = carButtons.map((item) => (
    <Buttons key={item.id} toggleBorder={toggleBorder} {...item} />
  ));

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const wheelToggle = (wheelType, index) => {
    let newActiveWheels = [];

    activeWheel.map((item, num) => {
      item = item ? !item : item;

      item = num === index ? !item : item;
      newActiveWheels.push(item);
    });
    setActiveWheel(newActiveWheels);
    setCurrentWheelType(wheelType);
  };

  const paintToggle = (carTitle, index) => {
    setPaintButtons(
      paintButtons.map((item, num) => (num === index ? true : false))
    );
    setCurrentPaint(currentModel.colors[index]);
  };

  useEffect(() => {
    if (currentPaint) {
      backgroundEffectColors.forEach((element) => {
        if (element.color === currentPaint.title) {
          console.log(element.color);
          setBackgroundEffect(element.background);
          setSideBackgroundEffect(element.background2);
        }
      });
    }
  }, [currentPaint, backgroundEffectColors]);

  function interiorToggle(index) {
    let newActiveInterior = [];

    interiorColor.map((item, num) => {
      item = item ? !item : item;

      item = num === index ? !item : item;
      newActiveInterior.push(item);
    });
    setInteriorColor(newActiveInterior);
  }

  function handleCheckboxChange(index) {
    setIsChargingChecked((prevState) =>
      prevState.map((item, num) => (num === index ? !item : item))
    );
  }

  function handleAccessoriesBoxChange(index) {
    setIsAccessoriesChecked((prevState) =>
      prevState.map((item, num) => (num === index ? !item : item))
    );
  }

  const accessoriesCard = accessories.map((item, index) => (
    <div key={index}>
      <label className="checkbox-container col">
        <input
          type="checkbox"
          checked={isAccessoriesChecked[index]}
          onChange={() => handleAccessoriesBoxChange(index)}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        {item.title}
      </label>
      <div>{item.price}</div>
    </div>
  ));

  const smallDevice = () => {
    return (
      <section className="order-car-page order-car-tablet">
        <div className="container-fluid order-container-page">
          <div className="row">
            <div className="col">
              <div className="order-image-card front-view">
                <img
                  src={currentWheel.frontView}
                  className="order-img"
                  alt="Car front view"
                />
                <div
                  className="order-image-car-bg"
                  style={{ background: backgroundEffect }}
                ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="order-title">{model}</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="car-speed text-center">
                <div className="row">
                  <div className="col range m-2">
                    <p>
                      {currentWheel.range.match(/\d+/)[0]}
                      <span>mi</span>
                    </p>
                    <p>Range (EPA est.)</p>
                  </div>
                  <div className="col top-speed m-2">
                    <p>
                      {topSpeed}
                      <span>mph</span>
                    </p>
                    <p>Top Speed</p>
                  </div>
                  <div className="col sixty-mph m-2">
                    <p>
                      {time}
                      <span>sec</span>
                    </p>
                    <p>0-60mph</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="buttons-model text-center">
                <button
                  className={`Cash button-type ${
                    showCard.data === 1 ? "active" : ""
                  }`}
                  onClick={() => buttonToggle(1)}
                >
                  Cash
                </button>
                <button
                  className={`Lease button-type ${
                    showCard.data === 2 ? "active" : ""
                  }`}
                  onClick={() => buttonToggle(2)}
                >
                  Lease
                </button>
                <button
                  className={`Finance button-type ${
                    showCard.data === 3 ? "active" : ""
                  }`}
                  onClick={() => buttonToggle(3)}
                >
                  Finance
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="button-card-content">
                <div className="button-desc d-flex justify-content-between">
                  <p className="showCard-desc">
                    {showCard.desc}
                    <span className="text-decoration-underline ml-1">
                      {" "}
                      Customize
                    </span>
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={isChecked}
                      onChange={handleSwitchChange}
                    />
                  </div>
                </div>
                <div className="button-card-buttons">{allButtons}</div>
                <div className="additional-info">{showCard.additionalInfo}</div>
              </div>
              <div className="feature-detail">
                <button>Feature Details</button>
              </div>
            </div>
          </div>

          <div className="carPaint row">
            <div className="col car-sideView">
              <img
                src={currentWheel.sideView}
                className="sideView"
                alt="Car side view"
              />
            </div>
            <div
              className="car-sideView-bg"
              style={{ background: sideBackgroundEffect }}
            ></div>
          </div>

          <div className="row">
            <div className="col paint-section">
              <div className="title-paint">Paint</div>

              <div className="paint-buttons">
                {currentModel.colors.map((color, index) => (
                  <button key={index}>
                    <img
                      src={
                        paintButtons[index] ? color.buttonActive : color.button
                      }
                      alt={`Paint ${index}`}
                      onClick={() => paintToggle(color.name, index)}
                    />
                  </button>
                ))}
              </div>

              <div className="paint-title-name">
                <p>{currentPaint.title}</p>
                <p>{currentPaint.price}</p>
              </div>
            </div>
          </div>

          <div className="row carWheel">
            <div className="col">
              <div
                className="col car-Wheel"
                style={{ background: sideBackgroundEffect }}
              >
                <img
                  src={currentWheel.wheelView}
                  className="wheelView"
                  alt="Car Wheel View"
                />
              </div>

              <div className="wheel-title">Wheels</div>

              <div className="wheel-buttons">
                <button onClick={() => wheelToggle("WheelOne", 0)}>
                  <img
                    src={
                      activeWheel[0]
                        ? currentModel.wheel[0].active
                        : currentModel.wheel[0].inActive
                    }
                    alt="Photon Wheels"
                  />
                </button>

                <button onClick={() => wheelToggle("WheelTwo", 1)}>
                  <img
                    src={
                      activeWheel[1]
                        ? currentModel.wheel[1].active
                        : currentModel.wheel[1].inActive
                    }
                    alt="Nova Wheels"
                  />
                </button>
              </div>

              <div className="wheel-desc">
                <p>{currentWheel.title}</p>
                <p>{currentWheel.price}</p>
                <p>{currentWheel.season}</p>
                <p>{currentWheel.range}</p>
              </div>

              <div className="learn-more">
                <button>Learn More</button>
              </div>
            </div>
          </div>

          {currentModel.TowHitch === "" ? (
            ""
          ) : (
            <div className="row tow-hitch">
              <div className="col">
                <div
                  className="col tow-image"
                  style={{ background: sideBackgroundEffect }}
                >
                  <img
                    src={currentWheel.towView}
                    className="towView"
                    alt="Car Tow View"
                  />
                </div>

                <div className="tow-hitch-title">{currentModel.Tow.title}</div>

                <p className="tow-price">{currentModel.Tow.price}</p>

                <p className="tow-desc">{currentModel.Tow.desc}</p>

                <div className="add-button">
                  <button>Add</button>
                </div>
              </div>
            </div>
          )}

          <div className="row interior">
            <div className="col">
              <div className="interior-img">
                <img
                  src={interiorColor[0] ? currentModel.Interior[0].Black : ""}
                />

                <img
                  src={interiorColor[1] ? currentModel.Interior[1].White : ""}
                />

                <img
                  src={interiorColor[2] ? currentModel.Interior[2].Cream : ""}
                />
              </div>

              <div className="intorior-desc">
                <div className="interior-title">Interior</div>

                <div className="interior-buttons">
                  <button onClick={() => interiorToggle(0)}>
                    <img
                      src={
                        interiorColor[0]
                          ? currentModel.Interior[0].active
                          : currentModel.Interior[0].inActive
                      }
                    />
                  </button>
                  <button onClick={() => interiorToggle(1)}>
                    <img
                      src={
                        interiorColor[1]
                          ? currentModel.Interior[1].active
                          : currentModel.Interior[1].inActive
                      }
                    />
                  </button>

                  {currentModel.Interior.length > 2 ? (
                    <button onClick={() => interiorToggle(2)}>
                      <img
                        src={
                          interiorColor[2]
                            ? currentModel.Interior[2].active
                            : currentModel.Interior[2].inActive
                        }
                      />
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                <div className="interior-desc">
                  <p className="title">
                    {interiorColor[0] ? currentModel.Interior[0].title : ""}
                  </p>
                  <p>
                    {interiorColor[0] ? currentModel.Interior[0].decor : ""}
                  </p>
                  <p>
                    {interiorColor[0] ? currentModel.Interior[0].price : ""}
                  </p>

                  <p className="title">
                    {interiorColor[1] ? currentModel.Interior[1].title : ""}
                  </p>
                  <p>
                    {interiorColor[1] ? currentModel.Interior[1].decor : ""}
                  </p>
                  <p>
                    {interiorColor[1] ? currentModel.Interior[1].price : ""}
                  </p>

                  <p className="title">
                    {interiorColor[2] ? currentModel.Interior[2].title : ""}
                  </p>
                  <p>
                    {interiorColor[2] ? currentModel.Interior[2].decor : ""}
                  </p>
                  <p>
                    {interiorColor[2] ? currentModel.Interior[2].price : ""}
                  </p>
                </div>
              </div>

              <div className="feature-details">
                <button>Feature Details</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col self-driving">
              <video ref={videoRef} autoPlay control loop>
                <source
                  src={currentModel.selfDriving.video}
                  type="video/webm"
                />
              </video>

              <div className="self-driving-desc">
                <div className="self-driving-title">
                  <h2>Full Self-Driving Capability</h2>
                </div>
                <p className="price">$8,000</p>

                <p>
                  Receive a 30 day trial of Full Self-Driving Capability with a
                  new vehicle purchase.
                </p>
                <p>
                  Your car will be able to drive itself almost anywhere with
                  minimal driver intervention and will continuously improve
                </p>
                <ul>
                  <li>Navigate on Autopilot</li>
                  <li>Auto Lane Change</li>
                  <li>Autopark</li>
                  <li>Summon</li>
                  <li>Smart Summon</li>
                  <li>Autosteer on city streets</li>
                  <li>Traffic Light and Stop Sign Control</li>
                </ul>

                <p>
                  The currently enabled features require active driver
                  supervision and do not make the vehicle autonomous. The
                  activation and use of these features are dependent on
                  achieving reliability far in excess of human drivers as
                  demonstrated by billions of miles of experience, as well as
                  regulatory approval, which may take longer in some
                  jurisdictions. As these self-driving features evolve, your car
                  will be continuously upgraded through over-the-air software
                  updates.
                </p>
                <div className="buttons">
                  <button className="add">Add</button>
                  <button>Feature Details</button>
                </div>

                <p>
                  Software options are excluded from the federal tax credit
                  price cap
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col charging">
              <div className="self-driving-desc">
                <div className="self-driving-title">
                  <h2>Charging</h2>
                </div>
                <div className="charging-desc">
                  <svg
                    className="svg-icon" // Add a class name for CSS styling
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                          fill="#3164f0"
                        ></path>
                        <path
                          d="M22,22h4v11h-4zM26.5,16.5c0,1.379 -1.121,2.5 -2.5,2.5c-1.379,0 -2.5,-1.121 -2.5,-2.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5z"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <p>Home charging equipment is not included</p>
                </div>
                <div className="charging-check-box">
                  <div>
                    <label className="checkbox-container col">
                      <input
                        type="checkbox"
                        checked={isChargingChecked[0]}
                        onChange={() => handleCheckboxChange(0)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom"></span>
                      Wall Connector
                    </label>

                    <div>$450</div>
                  </div>

                  <div>
                    <label className="checkbox-container col">
                      <input
                        type="checkbox"
                        checked={isChargingChecked[1]}
                        onChange={() => handleCheckboxChange(1)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom"></span>
                      Mobile Connector
                    </label>

                    <div>$250</div>
                  </div>

                  <div className="learn-more">
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col accessories">
              <div className="self-driving-desc">
                <div className="accessories-title">Accessories</div>

                <div className="charging-check-box">
                  {accessoriesCard}
                  <div className="learn-more">
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col order-your">
              <div className="self-driving-desc">
                <div className="order-now-title">
                  Order Your {currentModel.model}
                </div>

                <p className="est-delivery">
                  {currentModel.orderNow.estDelivery}
                </p>

                {currentModel.orderNow.qualifiesDesc != "" ? (
                  <div className="qualifiesDesc">
                    <svg
                      className="icon-large"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 256 256"
                    >
                      <g
                        fill="#14f238"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M20.29297,5.29297l-11.29297,11.29297l-4.29297,-4.29297l-1.41406,1.41406l5.70703,5.70703l12.70703,-12.70703z"></path>
                        </g>
                      </g>
                    </svg>
                    <p>
                      {currentModel.orderNow.qualifiesDesc}{" "}
                      <span>See Details</span>
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <div className="continue">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const largeDevice = () => {
    return (
      <div className="order-car-laptop">
        <div className="row d-flex">
          {currentModel.TowHitch === "" ? ( //WITHOUT TOW VIEW
            <div className="col-8 m-0 p-0 left-order">
              <div className="container-fluid order-images">
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
                  </ol>

                  <div
                    className="carousel-inner"
                    style={{ background: sideBackgroundEffect }}
                  >
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 order-img"
                        src={currentWheel.frontView}
                        alt="Front View"
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100 wheelView"
                        src={currentWheel.wheelView}
                        alt="Wheel View"
                      />
                    </div>

                    <div className="carousel-item">
                      <div className="interior-img">
                        {interiorColor[0] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[0].Black}
                            alt="Interior Black"
                          />
                        )}
                        {interiorColor[1] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[1].White}
                            alt="Interior White"
                          />
                        )}
                        {interiorColor[2] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[2].Cream}
                            alt="Interior Cream"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>

                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            //WITH TOW VIEW
            <div className="col-8 m-0 p-0 left-order">
              <div className="container-fluid order-images">
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
                  </ol>

                  <div
                    className="carousel-inner"
                    style={{ background: sideBackgroundEffect }}
                  >
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 order-img"
                        src={currentWheel.frontView}
                        alt="Front View"
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100 wheelView"
                        src={currentWheel.wheelView}
                        alt="Wheel View"
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100 towView"
                        src={currentWheel.towView}
                        alt="Tow View"
                      />
                    </div>

                    <div className="carousel-item">
                      <div className="interior-img">
                        {interiorColor[0] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[0].Black}
                            alt="Interior Black"
                          />
                        )}
                        {interiorColor[1] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[1].White}
                            alt="Interior White"
                          />
                        )}
                        {interiorColor[2] && (
                          <img
                            className="d-block w-100"
                            src={currentModel.Interior[2].Cream}
                            alt="Interior Cream"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>

                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="col-4 p-0 m-0 hold-scroll-right">
            <div className="right-order">
              <div className="container-fluid order-container-page">
                <div className="row">
                  <div className="col">
                    <div className="order-title">{model}</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="car-speed text-center">
                      <div className="row">
                        <div className="col range m-2">
                          <p>
                            {currentWheel.range.match(/\d+/)[0]}
                            <span>mi</span>
                          </p>
                          <p>Range (EPA est.)</p>
                        </div>
                        <div className="col top-speed m-2">
                          <p>
                            {topSpeed}
                            <span>mph</span>
                          </p>
                          <p>Top Speed</p>
                        </div>
                        <div className="col sixty-mph m-2">
                          <p>
                            {time}
                            <span>sec</span>
                          </p>
                          <p>0-60mph</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="buttons-model text-center">
                      <button
                        className={`Cash button-type ${
                          showCard.data === 1 ? "active" : ""
                        }`}
                        onClick={() => buttonToggle(1)}
                      >
                        Cash
                      </button>
                      <button
                        className={`Lease button-type ${
                          showCard.data === 2 ? "active" : ""
                        }`}
                        onClick={() => buttonToggle(2)}
                      >
                        Lease
                      </button>
                      <button
                        className={`Finance button-type ${
                          showCard.data === 3 ? "active" : ""
                        }`}
                        onClick={() => buttonToggle(3)}
                      >
                        Finance
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="button-card-content">
                      <div className="button-desc d-flex justify-content-between">
                        <p className="showCard-desc">
                          {showCard.desc}
                          <span className="text-decoration-underline ml-1">
                            {" "}
                            Customize
                          </span>
                        </p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                          />
                        </div>
                      </div>
                      <div className="button-card-buttons">{allButtons}</div>
                      <div className="additional-info">
                        {showCard.additionalInfo}
                      </div>
                    </div>
                    <div className="feature-detail">
                      <button>Feature Details</button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col paint-section">
                    <div className="title-paint">Paint</div>

                    <div className="paint-buttons">
                      {currentModel.colors.map((color, index) => (
                        <button key={index}>
                          <img
                            src={
                              paintButtons[index]
                                ? color.buttonActive
                                : color.button
                            }
                            alt={`Paint ${index}`}
                            onClick={() => paintToggle(color.name, index)}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="paint-title-name">
                      <p>{currentPaint.title}</p>
                      <p>{currentPaint.price}</p>
                    </div>
                  </div>
                </div>

                <div className="row carWheel">
                  <div className="col">
                    <div className="wheel-title">Wheels</div>

                    <div className="wheel-buttons">
                      <button onClick={() => wheelToggle("WheelOne", 0)}>
                        <img
                          src={
                            activeWheel[0]
                              ? currentModel.wheel[0].active
                              : currentModel.wheel[0].inActive
                          }
                          alt="Photon Wheels"
                        />
                      </button>

                      <button onClick={() => wheelToggle("WheelTwo", 1)}>
                        <img
                          src={
                            activeWheel[1]
                              ? currentModel.wheel[1].active
                              : currentModel.wheel[1].inActive
                          }
                          alt="Nova Wheels"
                        />
                      </button>
                    </div>

                    <div className="wheel-desc">
                      <p>{currentWheel.title}</p>
                      <p>{currentWheel.price}</p>
                      <p>{currentWheel.season}</p>
                      <p>{currentWheel.range}</p>
                    </div>

                    <div className="learn-more">
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>

                {currentModel.TowHitch === "" ? (
                  ""
                ) : (
                  <div className="row tow-hitch">
                    <div className="col">
                      <div className="tow-hitch-title">
                        {currentModel.Tow.title}
                      </div>

                      <p className="tow-price">{currentModel.Tow.price}</p>

                      <p className="tow-desc">{currentModel.Tow.desc}</p>

                      <div className="add-button">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row interior">
                  <div className="col">
                    <div className="intorior-desc">
                      <div className="interior-title">Interior</div>

                      <div className="interior-buttons">
                        <button onClick={() => interiorToggle(0)}>
                          <img
                            src={
                              interiorColor[0]
                                ? currentModel.Interior[0].active
                                : currentModel.Interior[0].inActive
                            }
                          />
                        </button>
                        <button onClick={() => interiorToggle(1)}>
                          <img
                            src={
                              interiorColor[1]
                                ? currentModel.Interior[1].active
                                : currentModel.Interior[1].inActive
                            }
                          />
                        </button>

                        {currentModel.Interior.length > 2 ? (
                          <button onClick={() => interiorToggle(2)}>
                            <img
                              src={
                                interiorColor[2]
                                  ? currentModel.Interior[2].active
                                  : currentModel.Interior[2].inActive
                              }
                            />
                          </button>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="interior-desc">
                        <p className="title">
                          {interiorColor[0]
                            ? currentModel.Interior[0].title
                            : ""}
                        </p>
                        <p>
                          {interiorColor[0]
                            ? currentModel.Interior[0].decor
                            : ""}
                        </p>
                        <p>
                          {interiorColor[0]
                            ? currentModel.Interior[0].price
                            : ""}
                        </p>

                        <p className="title">
                          {interiorColor[1]
                            ? currentModel.Interior[1].title
                            : ""}
                        </p>
                        <p>
                          {interiorColor[1]
                            ? currentModel.Interior[1].decor
                            : ""}
                        </p>
                        <p>
                          {interiorColor[1]
                            ? currentModel.Interior[1].price
                            : ""}
                        </p>

                        <p className="title">
                          {interiorColor[2]
                            ? currentModel.Interior[2].title
                            : ""}
                        </p>
                        <p>
                          {interiorColor[2]
                            ? currentModel.Interior[2].decor
                            : ""}
                        </p>
                        <p>
                          {interiorColor[2]
                            ? currentModel.Interior[2].price
                            : ""}
                        </p>
                      </div>
                    </div>

                    <div className="feature-details">
                      <button>Feature Details</button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col self-driving">
                    <div className="self-driving-desc">
                      <div className="self-driving-title">
                        <h2>Full Self-Driving Capability</h2>
                      </div>
                      <p className="price">$8,000</p>

                      <p>
                        Receive a 30 day trial of Full Self-Driving Capability
                        with a new vehicle purchase.
                      </p>
                      <p>
                        Your car will be able to drive itself almost anywhere
                        with minimal driver intervention and will continuously
                        improve
                      </p>
                      <ul>
                        <li>Navigate on Autopilot</li>
                        <li>Auto Lane Change</li>
                        <li>Autopark</li>
                        <li>Summon</li>
                        <li>Smart Summon</li>
                        <li>Autosteer on city streets</li>
                        <li>Traffic Light and Stop Sign Control</li>
                      </ul>

                      <p>
                        The currently enabled features require active driver
                        supervision and do not make the vehicle autonomous. The
                        activation and use of these features are dependent on
                        achieving reliability far in excess of human drivers as
                        demonstrated by billions of miles of experience, as well
                        as regulatory approval, which may take longer in some
                        jurisdictions. As these self-driving features evolve,
                        your car will be continuously upgraded through
                        over-the-air software updates.
                      </p>
                      <div className="buttons">
                        <button className="add">Add</button>
                        <button>Feature Details</button>
                      </div>

                      <p>
                        Software options are excluded from the federal tax
                        credit price cap
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col charging">
                    <div className="self-driving-desc">
                      <div className="self-driving-title">
                        <h2>Charging</h2>
                      </div>
                      <div className="charging-desc">
                        <svg
                          className="svg-icon" // Add a class name for CSS styling
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0,0,256,256"
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <g transform="scale(5.33333,5.33333)">
                              <path
                                d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                                fill="#3164f0"
                              ></path>
                              <path
                                d="M22,22h4v11h-4zM26.5,16.5c0,1.379 -1.121,2.5 -2.5,2.5c-1.379,0 -2.5,-1.121 -2.5,-2.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <p>Home charging equipment is not included</p>
                      </div>
                      <div className="charging-check-box">
                        <div>
                          <label className="checkbox-container col">
                            <input
                              type="checkbox"
                              checked={isChargingChecked[0]}
                              onChange={() => handleCheckboxChange(0)}
                              className="checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            Wall Connector
                          </label>

                          <div>$450</div>
                        </div>

                        <div>
                          <label className="checkbox-container col">
                            <input
                              type="checkbox"
                              checked={isChargingChecked[1]}
                              onChange={() => handleCheckboxChange(1)}
                              className="checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            Mobile Connector
                          </label>

                          <div>$250</div>
                        </div>

                        <div className="learn-more">
                          <button>Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col accessories">
                    <div className="self-driving-desc">
                      <div className="accessories-title">Accessories</div>

                      <div className="charging-check-box">
                        {accessoriesCard}
                        <div className="learn-more">
                          <button>Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col order-your">
                    <div className="self-driving-desc">
                      <div className="order-now-title">
                        Order Your {currentModel.model}
                      </div>

                      <p className="est-delivery">
                        {currentModel.orderNow.estDelivery}
                      </p>

                      {currentModel.orderNow.qualifiesDesc != "" ? (
                        <div className="qualifiesDesc">
                          <svg
                            className="icon-large"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 256 256"
                          >
                            <g
                              fill="#14f238"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(10.66667,10.66667)">
                                <path d="M20.29297,5.29297l-11.29297,11.29297l-4.29297,-4.29297l-1.41406,1.41406l5.70703,5.70703l12.70703,-12.70703z"></path>
                              </g>
                            </g>
                          </svg>
                          <p>
                            {currentModel.orderNow.qualifiesDesc}{" "}
                            <span>See Details</span>
                          </p>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="continue">
                        <button>Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="order-section-view" style={{ paddingBottom: "250px" }}>
      {windowWidth > LAPTOP_WIDTH ? largeDevice() : smallDevice()}
    </section>
  );
};

export default OrderCar;
