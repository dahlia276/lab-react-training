import React from "react"

function CreditCard({children, type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return(
        <div className="bkg" style={{backgroundColor: bgColor, color:color}}>
            <p> {type}</p>
            <p> {number}</p>
            <span>{expirationMonth}</span>
            <span>{expirationYear}</span>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard
