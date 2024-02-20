// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // function ImageComponent() {
// // //     const [imageSrc, setImageSrc] = useState("");
// // //     const [inputValue, setInputValue] = useState("");
// // //     const [error, setError] = useState(null);

// // //     const API_URL = "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4";
// // //     const headers = { "Authorization": "Bearer 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" };

// // //     const queryAPI = async (input) => {
// // //         try {
// // //             const response = await axios.post(API_URL, { "inputs": input }, { headers: headers });
// // //             console.log(response.data);

// // //             // Create a Blob from the binary data
// // //             const blob = new Blob([response.data], { type: 'image/jpeg' });

// // //             // Generate a URL for the Blob
// // //             const imageUrl = URL.createObjectURL(blob);

// // //             // Set the generated URL as the image source
// // //             setImageSrc(imageUrl);

// // //             setError(null);
// // //         } catch (error) {
// // //             console.error("Error fetching image:", error);
// // //             setError("Error fetching image. Please try again.");
// // //             setImageSrc(""); // Reset image source on error
// // //         }
// // //     };

// // //     const loadImage = () => {
// // //         queryAPI(inputValue);
// // //     };

// // //     const handleInputChange = (event) => {
// // //         setInputValue(event.target.value);
// // //     };

// // //     return (
// // //         <div>
// // //             <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter input" />
// // //             <button onClick={loadImage}>Load Image</button>
// // //             {error && <div>{error}</div>}
// // //             {imageSrc && <img src={imageSrc} alt="Loaded" />}
// // //         </div>
// // //     );
// // // }

// // // export default ImageComponent;


// // import React from "react";
// // import './TTI.css'

// // const TTI = () => {
// //     return (
// //         <>
// //             <div className="heading">
// //                 <h1>
// //                     Text To Image Model
// //                 </h1>
// //             </div>

// //             <div className="content">
// //                 <input className="input" type="text" placeholder="Enter input" />
// //                 <button className="btn">Load Image</button>
// //             </div>


// //         </>
// //     )
// // }
// // export default TTI;



// // import React, { useState } from "react";
// // import './TTI.css'
// // import axios from 'axios'

// // const TTI = () => {
// //     const [imageData, setImageData] = useState(null);
// //     const [inputText, setInputText] = useState("");

// //     const handleInputChange = (event) => {
// //         setInputText(event.target.value);
// //     };

// //     const loadImage = () => {
// //         // Make a POST request to the API
// //         axios.post('https://fastapi-example-ve3m.onrender.com/process_image/', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({ prompt: inputText })
// //         })
// //         .then(response => response.json())
// //         .then(data => {
// //             // Once response is received, set the imageData state
// //             setImageData(data.image);
// //         })
// //         .catch(error => {
// //             console.error('Error fetching image data:', error);
// //         });
// //     };

// //     return (
// //         <>
// //             <div className="heading">
// //                 <h1>
// //                     Text To Image Model
// //                 </h1>
// //             </div>

// //             <div className="content">
// //                 <input 
// //                     className="input" 
// //                     type="text" 
// //                     placeholder="Enter input" 
// //                     value={inputText}
// //                     onChange={handleInputChange}
// //                 />
// //                 <button className="btn" onClick={loadImage}>Load Image</button>
// //             </div>

// //             {imageData && (
// //                 <div className="image-container">
// //                     <img src={imageData} alt="Generated Image" />
// //                 </div>
// //             )}
// //         </>
// //     )
// // }

// // export default TTI;


// // import React, { useState } from "react";
// // import axios from 'axios';
// // import './TTI.css'

// // const TTI = () => {
// //     const [imageData, setImageData] = useState(null);
// //     const [inputText, setInputText] = useState("");

// //     const handleInputChange = (event) => {
// //         setInputText(event.target.value);
// //     };

// //     const loadImage = () => {
// //         // Make a POST request to the API using Axios
// //         axios.post('https://fastapi-example-ve3m.onrender.com/process_image', { prompt: inputText })
// //             .then(response => {
// //                 // Once response is received, set the imageData state
// //                 setImageData(response.data.image);
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching image data:', error);
// //             });
// //     };

// //     return (
// //         <>
// //             <div className="heading">
// //                 <h1>
// //                     Text To Image Model
// //                 </h1>
// //             </div>

// //             <div className="content">
// //                 <input 
// //                     className="input" 
// //                     type="text" 
// //                     placeholder="Enter input" 
// //                     value={inputText}
// //                     onChange={handleInputChange}
// //                 />
// //                 <button className="btn" onClick={loadImage}>Load Image</button>
// //             </div>

// //             {imageData && (
// //                 <div className="image-container">
// //                     <img src={imageData} alt="Generated Image" />
// //                 </div>
// //             )}
// //         </>
// //     )
// // }

// // export default TTI;

// // import React, { useState } from "react";
// // import axios from 'axios';
// // import './TTI.css'

// // const TTI = () => {
// //     const [imageData, setImageData] = useState(null);
// //     const [inputText, setInputText] = useState("");
// //     const [error, setError] = useState(null);

// //     const handleInputChange = (event) => {
// //         setInputText(event.target.value);
// //     };

// //     const loadImage = () => {
// //         // Make a POST request to the API using Axios
// //         axios.post('https://fastapi-example-ve3m.onrender.com/process_image', { prompt: inputText })
// //             .then(response => {
// //                 // Once response is received, set the imageData state
// //                 setImageData(response.data.image);
// //                 setError(null); // Clear any previous errors
// //             })
// //             .catch(error => {
// //                 // Handle errors
// //                 setError(error.message || 'An error occurred while fetching image data');
// //             });
// //     };

// //     return (
// //         <>
// //             <div className="heading">
// //                 <h1>
// //                     Text To Image Model
// //                 </h1>
// //             </div>

// //             <div className="content">
// //                 <input 
// //                     className="input" 
// //                     type="text" 
// //                     placeholder="Enter input" 
// //                     value={inputText}
// //                     onChange={handleInputChange}
// //                 />
// //                 <button className="btn" onClick={loadImage}>Load Image</button>
// //             </div>

// //             {error && <div className="error">{error}</div>}

// //             {imageData && (
// //                 <div className="image-container">
// //                     <img src={imageData} alt="Generated Image" />
// //                 </div>
// //             )}
// //         </>
// //     )
// // }

// // export default TTI;


// import React, { useState } from "react";
// import axios from 'axios';
// import './TTI.css'

// const TTI = () => {
//     const [imageData, setImageData] = useState(null);
//     const [inputText, setInputText] = useState("");
//     const [error, setError] = useState(null);

//     const handleInputChange = (event) => {
//         setInputText(event.target.value);
//     };

//     const loadImage = () => {
//         // Make a POST request to the API using Axios
//         axios.post('https://fastapi-example-ve3m.onrender.com/process_image', { prompt: inputText }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             // Once response is received, set the imageData state
//             setImageData(response.data.image);
//             setError(null); // Clear any previous errors
//         })
//         .catch(error => {
//             // Handle errors
//             setError(error.message || 'An error occurred while fetching image data');
//         });
//     };

//     return (
//         <>
//             <div className="heading">
//                 <h1>
//                     Text To Image Model
//                 </h1>
//             </div>

//             <div className="content">
//                 <input 
//                     className="input" 
//                     type="text" 
//                     placeholder="Enter input" 
//                     value={inputText}
//                     onChange={handleInputChange}
//                 />
//                 <button className="btn" onClick={loadImage}>Load Image</button>
//             </div>

//             {error && <div className="error">{error}</div>}

//             {imageData && (
//                 <div className="image-container">
//                     <img src={imageData} alt="Generated Image" />
//                 </div>
//             )}
//         </>
//     )
// }

// export default TTI;


// import React, { useState } from "react";
// import axios from 'axios';
// import './TTI.css'

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
//         .then(response => {
//             // Once response is received, set the imageData state
//             setImageData(response.data.image);
//             setError(null); // Clear any previous errors
//         })
//         .catch(error => {
//             // Handle errors
//             setError(error.message || 'An error occurred while fetching image data');
//         });
//     };

//     return (
//         <>
//             <div className="heading">
//                 <h1>
//                     Text To Image Model
//                 </h1>
//             </div>

//             <div className="content">
//                 <input 
//                     className="input" 
//                     type="text" 
//                     placeholder="Enter input" 
//                     value={inputText}
//                     onChange={handleInputChange}
//                 />
//                 <button className="btn" onClick={loadImage}>Load Image</button>
//             </div>

//             {error && <div className="error">{error}</div>}

//             {imageData && (
//                 <div className="image-container">
//                     <img src={imageData} alt="Generated Image" />
//                 </div>
//             )}
//         </>
//     )
// }

// export default TTI;


import React, { useState } from "react";
import axios from 'axios';
import './TTI.css'

const TTI = () => {
    const [imageData, setImageData] = useState(null);
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const loadImage = () => {
        // Create the prompt object with the image_query
        const prompt = {
            image_query: inputText
        };

        // Make a POST request to the API using Axios
        axios.post('https://fastapi-example-ve3m.onrender.com/process_image', prompt, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Once response is received, set the imageData state
            setImageData(response.data.image_base64);
            setError(null); // Clear any previous errors
        })
        .catch(error => {
            // Handle errors
            setError(error.message || 'An error occurred while fetching image data');
        });
    };

    return (
        <>
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

            {imageData && (
                <div className="image-container">
                    <img src={`data:image/png;base64,${imageData}`} alt="Generated Image" />
                </div>
            )}
        </>
    )
}

export default TTI;



