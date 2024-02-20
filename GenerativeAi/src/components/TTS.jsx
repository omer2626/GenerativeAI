import React from "react";

const TTS = () =>{
    return (
        <>
            <div className="heading">
                <h1>
                    Text To Speech Model
                </h1>
            </div>

            <div className="content">
                <input className="input" type="text" placeholder="Enter input" />
                <button className="btn">Speak Out </button>
            </div>


        </>
    )
}

export default TTS;