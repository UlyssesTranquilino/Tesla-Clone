import React, { useRef, useEffect } from "react";

export default function Vehicles() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.loop = true;
            video.play();
        }
    }, [])


    return (
        <div className="vehicle">
            <div className="intro">
                <div className="intro-desc">
                    <div className="intro-texts">
                    <h1 className="company-name">TESLA</h1>
                    <p className="company-desc">Tesla, Inc., American manufacturer of electric automobiles, solar panels, and batteries for cars and home power storage.</p>
                </div>
                <div className="button-view-cars">
                        <button className="view-cars">View Cars</button>
                    </div> 
                </div>

                <video ref={videoRef} autoPlay control loop className="background-video">
                    <source src="../../Videos/IntroVid.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}