import './foodTruck.css'
import React from "react";

const FoodTruck = (props) => {
    return (
        <>
        <div className="foodTruck">
            <img src={props.picture} alt={props.pictureName} className="picture" width='150rem' height='150rem'/>
            <span className="name">{props.name}</span>
            <a href={props.link}>Link</a>
        </div>
        </>
    )
}

export default FoodTruck;