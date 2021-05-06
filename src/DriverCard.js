import React from "react";

function DriveCard({name, rating, img, car }) {
    return(
        <div>
            <p>{name}</p>
            <p>{rating}</p>
            <img src={img} />
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
        </div>
    )
}
   

export default DriveCard