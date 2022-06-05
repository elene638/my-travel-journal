import React from "react";

function Main(props) {
    return (
        <div className="main">
            <img alt="pic" src={props.imageUrl} />
            <div className="description">
                <p className="location" ><i className="fa-solid fa-location-dot"></i>{props.location} <a className="map" href={props.googleMapsUrl} >View on Google Maps</a></p>
                <h1 className="title" >{props.title}</h1>
                <p className="date" >{props.startDate}-{props.endDate}</p>
                <p className="descriptionText" > {props.description} </p>
                <hr />
            </div>
        </div>
    )
}

export default Main;