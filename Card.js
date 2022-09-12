import React from "react"

export default function Card (props) {
    return(
        <div className="card--container">
            <img src={props.item.imageUrl} className="card--img"/>
            <div className="card--info">
                <span className="card--location--info">
                    <h3 className="card--location">{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl} className="card--link">View on Google Maps</a>
                </span>
                <h1 className="card--title">{props.item.title}</h1>
                <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}