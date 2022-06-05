import React from "react";

function Main(props) {
    return (
        <div className="main">
            <img alt="pic" src={props.imageUrl} />
            <div className="description">
                <p><i class="fa-solid fa-location-dot"></i>{props.location}</p>
                <a href={props.googleMapsUrl} >View on Google Maps</a>
                <h1>{props.title}</h1>
                <p>{props.startDate}-{props.endDate}</p>
                <p> {props.description} </p>
                <hr />
            </div>
        </div>
    )
}

export default Main;