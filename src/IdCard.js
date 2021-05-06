import React from "react";

function IdCard ({children, lastName, firstName, gender, height, birth, picture}) {
        return([
            <div>
                <img src={picture} />
                 <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <span>Height: {height}</span>
                <span>Birth: {birth.toDateString()}</span>
            </div>
         ])
}

export default IdCard