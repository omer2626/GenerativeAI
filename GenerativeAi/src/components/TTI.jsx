




// import React, { useState } from "react";
// import axios from 'axios';
// import './TTI.css';
// import { Link } from "react-router-dom";
// import Loader from "./Loader";


// const TTI = () => {
//     const [imageData, setImageData] = useState(null);
//     const [inputText, setInputText] = useState("");
//     const [error, setError] = useState(null);

//     const handleInputChange = (event) => {
//         setInputText(event.target.value);
//     };

//     const loadImage = () => {
//         // Create the prompt object with the image_query
//         const prompt = {
//             image_query: inputText
//         };

//         // Make a POST request to the API using Axios
//         axios.post('https://fastapi-example-ve3m.onrender.com/process_image', prompt, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(response => {
//                 // Once response is received, set the imageData state
//                 setImageData(response.data.image_base64);
//                 setError(null); // Clear any previous errors
//             })
//             .catch(error => {
//                 // Handle errors
//                 setError(error.message || 'An error occurred while fetching image data');
//             });
//     };

//     const handleDownload = () => {
//         const link = document.createElement('a'); 
//         link.href = `data:image/jpeg;base64,${imageData}`;
//         link.download = 'generated_image.jpg';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <>
//             <div className="icon">
//                 <Link to='/'>
//                 {/* <a href="/"> */}
//                     <i className='bx bx-arrow-back' ></i>
//                 {/* </a> */}
//                 </Link>
//             </div>
//             <article className="mainbody">
//                 <div className="heading">
//                     <h1>
//                         Text To Image Model
//                     </h1>
//                 </div>
//                 <div className="content">
//                     <input
//                         className="input"
//                         type="text"
//                         placeholder="Enter input"
//                         value={inputText}
//                         onChange={handleInputChange}
//                     />
//                     <button className="btn" onClick={loadImage}>Load Image</button>
//                 </div>

//                 {error && <div className="error">{error}</div>}

//                 {imageData && (
//                     <div className="image-container">
//                         <img src={`data:image/png;base64,${imageData}`} alt="Generated Image" />
//                         {/* <i class='bx bxs-download'></i> */}
//                         <button className="dbtn" onClick={handleDownload} >Download</button>
//                     </div>

//                 )}
//             </article>
//         </>
//     );
// };

// export default TTI;


import React, { useState } from "react";
import axios from 'axios';
import './TTI.css';
import { Link } from "react-router-dom";
import Loader from "./Loader";


const TTI = () => {
    const [imageData, setImageData] = useState(null);
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const loadImage = () => {
        setLoading(true); // Set loading to true before making the API call
        const prompt = {
            image_query: inputText
        };

        axios.post('https://fastapi-example-ve3m.onrender.com/process_image', prompt, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setImageData(response.data.image_base64);
                setError(null);
            })
            .catch(error => {
                setError(error.message || 'An error occurred while fetching image data');
            })
            .finally(() => {
                setLoading(false); // Set loading to false once response is received
            });
    };

    const handleDownload = () => {
        const link = document.createElement('a'); 
        link.href = `data:image/jpeg;base64,${imageData}`;
        link.download = 'generated_image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                        Text To Image Model
                    </h1>
                </div>
                <div className="content">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter input"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <button className="btn" onClick={loadImage}>Load Image</button>
                </div>

                {error && <div className="error">{error}</div>}

                {loading ? ( // Display Loader while loading
                    <Loader />
                ) : (
                    imageData && (
                        <div className="image-container">
                            <img src={`data:image/png;base64,${imageData}`} alt="Generated Image" />
                            <button className="dbtn" onClick={handleDownload} >Download</button>
                        </div>
                    )
                )}
            </article>
        </>
    );
};

export default TTI;
