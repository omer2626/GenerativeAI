
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const TTM = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [buttonDisabled, setButtonDisabled] = useState(false); // Add button disabled state

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true); // Set loading to true before making the API call
    setButtonDisabled(true); // Disable the button
    try {
      const response = await axios.post("https://musicgenerate.onrender.com/generate_audio/", {
        inputs: inputText
      });
      const audioBase64 = response.data.audio_base64;
      const audioBlob = base64toBlob(audioBase64);
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Error fetching audio:", error);
    } finally {
      setLoading(false); // Set loading to false once response is received
      setButtonDisabled(false); // Enable the button
    }
  };

  // Function to convert base64 to Blob
  const base64toBlob = (base64Data) => {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: 'audio/mpeg' });
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
          <h1>Text To Music Model</h1>
        </div>

        <div className="content">
          <input className="input" type="text" placeholder="Enter input" value={inputText} onChange={handleChange} />
          <button className="btn" onClick={handleClick} disabled={buttonDisabled}>
            Play Music
          </button>
        </div>

        {loading ? ( // Display Loader while loading
          <Loader />
        ) : (
          audioSrc && <audio controls src={audioSrc} />
        )}
      </article>
    </>
  );
};

export default TTM;

