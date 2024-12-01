import React from "react";

export default function CarContent(props) {
    return (
        <div className="row car-top-title">
            <div className="col car">
                <img src={props.image}/>
            </div>
        </div>

    )
}