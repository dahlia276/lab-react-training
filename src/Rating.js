import React from "react"

function Rating({children, style}) {
    let nbOfStars = Math.round(children)
     if (nbOfStars === 0) return <div style={style}>☆☆☆☆☆</div>
     if (nbOfStars === 1) return <div style={style}>★☆☆☆☆</div>
     if (nbOfStars === 2) return <div style={style}>★★☆☆☆</div>
     if (nbOfStars === 3) return <div style={style}>★★★☆☆</div>
     if (nbOfStars === 4) return <div style={style}>★★★★☆</div>
     return <div style={style}>★★★★★</div>
}

export default Rating