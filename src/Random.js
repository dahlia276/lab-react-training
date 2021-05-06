import React from "react"

function Random({min, max}) {
let randomValue = Math.floor((Math.random() * max) + min);
    return(
    <p>Random value between{min} and {max} is {randomValue}</p>
)
}

export default Random