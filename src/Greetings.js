import React from "react"

function Greetings ({lang, children}){
    let language = "lang"
    if(lang === "de") {
        language = `Hallo`
    } 
    if( lang === "en"){
        language = `Hello`
    }
    if( lang === "es"){
        language =  `Hola`
    }
    if(lang === "fr"){
        language = `Bonjour`
    }

    return(
       <div>
       <p> {language} {children}</p>
        </div>
    )
}

export default Greetings