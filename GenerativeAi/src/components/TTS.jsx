
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const TTS = () => {
    const [audioSrc, setAudioSrc] = useState("");
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false); // Add button disabled state

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleClick = async () => {
        try {
            setLoading(true); // Set loading state to true before making the request
            setButtonDisabled(true); // Disable the button
            const response = await axios.post("https://fastapi-example-i1ta.onrender.com/generate_audioclip", {
                text: inputText
            });

            if (response.data && response.data.audio_url) {
                setAudioSrc(response.data.audio_url);
                setError("");
            } else {
                setError("Audio data not found in response");
            }
        } catch (error) {
            setError("Error fetching audio");
            console.error("Error fetching audio:", error);
        } finally {
            setLoading(false); // Set loading state to false after the request is completed
            setButtonDisabled(false); // Enable the button
        }
    };

    const handleAudioError = (e) => {
        setError("Error playing audio");
        console.error("Error playing audio:", e);
    };

    return (
        <>
            <div className="icon">
                <Link to='/'>
                    <i className='bx bx-arrow-back' ></i>
                </Link>
            </div>
            <article className="mainbody">
                <div className="heading">
                    <h1>
                        Text To Speech Model
                    </h1>
                </div>

                <div className="content">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter input"
                        value={inputText}
                        onChange={handleChange}
                    />
                    <button className="btn" onClick={handleClick} disabled={buttonDisabled}>
                        Speak Out
                    </button>
                </div>
                {error && <p>{error}</p>}
                {loading && <Loader />} {/* Render loader if loading state is true */}
                {audioSrc && !loading && <audio controls src={audioSrc} onError={handleAudioError} />}
            </article>
        </>
    );
};

export default TTS;

