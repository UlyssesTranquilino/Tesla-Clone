import React, { useEffect, useRef, useState } from "react";

//GSAP
import gsap from "gsap";
import "../components/GsapAnimations/ModelYGsap.js";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

import "./Model X Responsive/modelX.css";
import "./Model Y Responsive/modelY-xs-475.css";
import "./Model Y Responsive/modelY-sm-640.css";
import "./Model Y Responsive/modelY-md-768.css";
import "./Model Y Responsive/modelY-lg-992.css";
import "./Model Y Responsive/modelY-xl-1280.css";

//Video Clips
import vidNoAccident from "../../Images/Model Y/Model Y No Accident.webm";

//Carousel Clips
import LosAngelesToLasVegas from "../../Images/Model Y/LosAngeles to LasVegas.mp4";
import SantaCruzToLakeTahoe from "../../Images/Model Y/Santa Cruz to Lake Tahoe.mp4";
import GrandCanyonToPhoenix from "../../Images/Model Y/Grand Canyon to Phoenix.mp4";
import ChicagoToDetriot from "../../Images/Model Y/Chicago to Detriot.mp4";
import MiamaToTampa from "../../Images/Model Y/Miama to Tampa.mp4";

//Scroll Images
import WhileYouSleep from "../../Images/Model Y/Mobile - Model Y While You Sleep.png";
import DuringTheDay from "../../Images/Model Y/Mobile - Model Y During the Day.png";
import OnRoadTrips from "../../Images/Model Y/Mobile - Model Y On Road Trips.png";

//CHARGE EVERYWHERE (SEVENTH SECTION)
import ModelYChargeMobile from "../../Images/Model Y/Model-Y-Charge-Mobile.webm";
import ModelYChargeDesktop from "../../Images/Model Y/Model-Y-Charge-Deskop.webm";
import ModelYRoomDesktop from "../../Images/Model Y/Model-Y-Room-Desktop.webm";

const ModelX = () => {
  const videoRef = useRef(null);
  const [currentBGVid, setCurrentBGVid] = useState(ModelYChargeMobile);
  const [roomBgVid, setRoomBgVid] = useState(ModelYRoomDesktop);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play();
    }
  }, []);

  const [allSlideMaps, setAllSlideMaps] = useState([
    {
      id: 1,
      mapVid: LosAngelesToLasVegas,
      title: "Los Angeles to Las Vegas",
      miles: "270 miles",
      isActive: true,
    },
    {
      id: 2,
      mapVid: SantaCruzToLakeTahoe,
      title: "Santa Cruz to Lake Tahoe",
      miles: "257 miles",
      isActive: false,
    },
    {
      id: 3,
      mapVid: GrandCanyonToPhoenix,
      title: "Phoenix Grand Canyon",
      miles: "267 miles",
      isActive: false,
    },
    {
      id: 4,
      mapVid: ChicagoToDetriot,
      title: "Chicago to Detriot",
      miles: "283 miles",
      isActive: false,
    },
    {
      id: 5,
      mapVid: MiamaToTampa,
      title: "Miami to Tampa",
      miles: "271 miles",
      isActive: false,
    },
  ]);

  const [activeVid, setActiveVid] = useState(allSlideMaps[0].mapVid);

  function toggleSlideCharging(num) {
    const newArray = allSlideMaps.map((item, index) => {
      if (num === index) {
        item.isActive = item.isActive ? !item.isActive : item.isActive;

        toggleAnimationSlide(num);
        setActiveVid(item.mapVid);
        return { ...item, isActive: !item.isActive };
      } else if (item.isActive) {
        return { ...item, isActive: false };
      } else {
        return item;
      }
    });
    setAllSlideMaps(newArray);
  }

  function toggleAnimationSlide(num, item) {
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 991) {
      switch (num) {
        case 0:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0,
            ease: "power3.out",
          });
          break;

        case 1:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0, // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 2:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0, // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 3:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0, // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 4:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0, // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;
      }
    } else if (viewportWidth < 640) {
      switch (num) {
        case 0:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0,
            ease: "power3.out",
          });
          break;

        case 1:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-17%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 2:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-37%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 3:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-57%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 4:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-77%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;
      }
    } else {
      switch (num) {
        case 0:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0,
            ease: "power3.out",
          });
          break;

        case 1:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: 0,
            ease: "power3.out",
          });
          break;

        case 2:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-25%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 3:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-50%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;

        case 4:
          gsap.to(".slide-cards", {
            duration: 0.8,
            x: "-50%", // Example: moves in a different direction for variety
            ease: "power3.out",
          });
          break;
      }
    }
  }
  const allSlideMapsCards = () => {
    return allSlideMaps.map((currentSlide, index) => {
      return (
        <div
          key={currentSlide.id}
          onClick={() => toggleSlideCharging(index)}
          style={{
            color: currentSlide.isActive
              ? "rgb(255, 255, 255)"
              : "rgb(150, 150, 150)",
          }}
          className="cardMaps"
        >
          <hr
            className="line"
            style={{
              backgroundColor: currentSlide.isActive
                ? "rgb(255, 255, 255)"
                : "rgb(150, 150, 150)",
            }}
          ></hr>

          <h3>{currentSlide.title}</h3>
          <h1>{currentSlide.miles}</h1>
        </div>
      );
    });
  };

  const [engineeredSafetyImage, setEngineeredSafetyImage] = useState(
    "../../../Images/Model Y/Engineered Your Safety Mobile.png"
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setCurrentBGVid(ModelYChargeDesktop);
        setEngineeredSafetyImage(
          "../../../Images/Model Y/Engineered Your Safety.png"
        );
      } else {
        setEngineeredSafetyImage(
          "../../../Images/Model Y/Engineered Your Safety Mobile.png"
        );
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageBoxRef = useRef();
  const [boxImageStyle, setBoxImageStyle] = useState({
    backgroundColor: "blue",
  });
  const [scrollImage, setScrollImage] = useState(WhileYouSleep);
  const [grpTextStlyes, setGrpTextStyles] = useState([
    { color: "white" },
    { color: "white" },
    { color: "white" },
  ]);
  useGSAP(() => {
    const tween = gsap.to(".vertical-carousel", {
      y: -840,
      duration: 2,
    });

    ScrollTrigger.create({
      trigger: ".current-scroll-image-trigger",
      start: "top 10%",
      end: "+=" + 1950,
      pin: true,
      scrub: 1,
      animation: tween,
    });

    function fadeInImage(imgNum) {
      if (imgNum == 1) {
        gsap.to(".whileYouSleepImg", {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        });
      } else if (imgNum == 2) {
        gsap.to(".whileYouSleepImg", {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        });
      }
    }

    ScrollTrigger.create({
      trigger: ".grp-2",
      start: "top 30%",
      end: "bottom 80%",
      onEnter: () => {
        fadeInImage(2);
      },
      onEnterBack: () => {
        fadeInImage(2);
      },
      onLeaveBack: () => {
        fadeInImage(1);
      },
    });

    ScrollTrigger.create({
      trigger: ".grp-3",
      start: "top 20%",
      end: "bottom 80%",
      onEnter: () => {
        fadeInImage(OnRoadTrips);
      },
      onEnterBack: () => {
        fadeInImage(OnRoadTrips);
      },
      onLeaveBack: () => {
        fadeInImage(DuringTheDay);
      },
    });
  });

  return (
    <section>
      <div className="container-fluid order-container-page model-x">
        <div className="row model-x-main">
          <div className="col main-title">
            <h1>Model X</h1>
            <h3 style={{ fontSize: "25px" }}>Plaid</h3>
          </div>

          <div className="col badges">
            <div className="row desc-badges text-center">
              <div className="col">
                <h2>536 mi</h2>
                <h3>Range(est.)</h3>
              </div>

              <div className="col">
                <h2>2.5 s</h2>
                <h3>0-60 mph</h3>
              </div>

              <div className="col">
                <h2>9.9 s</h2>
                <h3>1/4 Mile</h3>
              </div>
            </div>

            <div className="row button-badges">
              <button>Order Now</button>
              <button>Demo Drive</button>
            </div>
          </div>
        </div>

        <div className="row model-y-second-section">
          <div className="col model-y-second">
            <img
              src={engineeredSafetyImage}
              alt="Baby inside the car"
              className="img-second"
            />
          </div>

          <div className="col second-section-desc">
            <div className="engineer-safety">
              <h1>Engineered for Your Safety</h1>
              <p>
                We engineer our vehicles to be the safest in the world. With an
                extremely low chance of roll-over and occupant injury, Model Y
                receives some of the highest possible safety ratings.
              </p>
            </div>
          </div>
        </div>

        <div className="row model-y-third-section">
          <div className="col model-y-third">
            <video
              key="vidModelYNoAccident"
              src={vidNoAccident}
              autoPlay
              loop
              muted
              playsInline
              className="background-no-accident"
            ></video>
          </div>

          <div className="engineer-safety">
            <h1>The Best Accident is No Accident</h1>
            <p>
              Active safety features can help reduce impact severity or prevent
              accidents from happening altogether. Features like Forward
              Collision Warning, Active Emergency Braking, and Lane Departure
              avoidance all come standard.
            </p>
          </div>
        </div>

        <div className="row model-y-fourth-section">
          <div className="engineer-safety">
            <h1>Go Anywhere</h1>
            <p>
              Go ahead, take the road trip. With up to 320 miles (est.) of range
              on a single charge, chances are you'll need a break before your
              Model Y will. Dual motor all-wheel drive ensures you're ready to
              tackle any road conditions.
            </p>
          </div>
        </div>

        <div className="row model-y-fifth-section">
          <div className="col model-y-fifth">
            <div className="active-screen-vid">
              <video
                key="vidModelYNoAccident"
                src={activeVid}
                autoPlay
                loop
                muted
                playsInline
                className="videoMap"
              ></video>
            </div>

            <div className="horizontal-slide-container">
              <div className="slide-cards">{allSlideMapsCards()}</div>
            </div>
          </div>
        </div>

        <div className="row model-y-sixth-section">
          <div className="engineer-safety">
            <div className="demo">
              <h1>Demo Drive Model Y</h1>
              <p>Enter a zip code to find Tesla showrooms near you: </p>
            </div>

            <div className="zip-code">
              <p>Zip Code</p>
              <input type="text" id="zip-code" name="zip-code" required />

              <button className="order-modely-button">Next</button>
            </div>
          </div>

          <div className="img-order-container">
            <img
              src="../../../Images/Model Y/Order Model Y.png"
              alt="Model Y"
              className="img-order-model-y"
            />

            <button className="order-modely-button">Next</button>
          </div>
        </div>

        {/* 
        <div className='row model-y-seventh-section'>  
          <div className='model-y-vid-container'>
          <div className='engineer-safety'>
                    <h1>Charge Everywhere</h1>
                    <p>Plentry of range for every kind of drive. From daily driving to family road trips, charging Model Y is fast, convenient and accessible anywhere there's electricity.</p>
            </div> 
            <video
                    key="chargeMobile"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="backgroundVideo"
                    src={ModelYChargeMobile}
            >
            </video>
          </div>

        </div> */}
        <div className="row model-y-seventh-section">
          <div className="engineer-safety">
            <h1>Charge Everywhere</h1>
            <p>
              Plentry of range for every kind of drive. From daily driving to
              family road trips, charging Model Y is fast, convenient and
              accessible anywhere there's electricity.
            </p>
          </div>
          <div className="vid-background-seventh">
            <video
              key="chargeMobile"
              autoPlay
              loop
              muted
              playsInline
              className="backgroundVideo"
              src={currentBGVid}
            ></video>
          </div>
        </div>

        {/* <div ref={imageBoxRef} className="row model-y-eight-section">
          <div className="">
            <div className="scrollEffect-wrapper">
              <div className="current-scroll-image-trigger">
                <div className="current-scroll-image">
                  <img src={OnRoadTrips} className="OnRoadTripsImg" />
                  <img src={DuringTheDay} className="duringTheDayImg" />
                  <img src={WhileYouSleep} className="whileYouSleepImg" />
                </div>

                <div className="cover"></div>

                <div className="vertical-carousel">
                  <div className="grp-1" style={grpTextStlyes[0]}>
                    <h1>While You Sleep</h1>
                    <p>
                      Charge at home with Wall Connector and add up to 44 miles
                      of range per hour.
                    </p>
                  </div>

                  <div className="grp-2">
                    <h1>During the Day</h1>
                    <p>
                      Plug Mobile Connector in to any standard outlet and add up
                      to 30 miles of range per hour.
                    </p>
                  </div>

                  <div className="grp-3">
                    <h1>On Road Trips</h1>
                    <p>
                      Add up to 170 miles of range in just 15 minutes at a
                      Supercharger along your route or recharge at your
                      destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className=" pt-5 engineer-safety d-flex justify-content-center align-items-center bg-white text-black">
          <div className="model-y-eight-section">
            <div className="mb-5 during-the-day-container">
              <img
                src={WhileYouSleep}
                className="h-10 mb-5 rounded OnRoadTripsImg"
              />
              <h1 className="mb-2">While You Sleep</h1>
              <p>
                Charge at home with Wall Connector and add up to 44 miles of
                range per hour.
              </p>
            </div>
            <div className="while-you-sleep-container">
              <img
                src={DuringTheDay}
                className="h-10 mb-5 rounded OnRoadTripsImg"
              />
              <div>
                <h1 className="mb-2">During the Day</h1>
                <p>
                  Plug Mobile Connector in to any standard outlet and add up to
                  30 miles of range per hour.
                </p>
              </div>
            </div>
            <div className="onRoad-Trip-container">
              <img
                src={OnRoadTrips}
                className="h-10 mb-5 rounded OnRoadTripsImg"
              />
              <div>
                <h1 className="mb-2">On Road Trips</h1>
                <p>
                  Add up to 170 miles of range in just 15 minutes at a
                  Supercharger along your route or recharge at your destination.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row model-y-ninth-section  room-for-everything-container">
          <div className="vid-background-ninth d-flex justify-content-center align-items-center">
            <video
              key="roomEverything"
              autoPlay
              loop
              muted
              playsInline
              className="background-video-room"
              src={roomBgVid}
            ></video>
          </div>
          <div className="room-text engineer-safety">
            <h1>Room for Everything</h1>
            <p>
              Fold-flat-seats, two trunks and flexible storage for skis,
              furniture, luggage and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelX;
