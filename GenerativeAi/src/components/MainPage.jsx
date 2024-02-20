import React from "react";
import './Main.css'
import { Link } from "react-router-dom";
import TTI from "./TTI";
const Main = () => {
    return (
        <>
            <article className="heading">
                <h1> GENERATIVE AI MODELS </h1>
            </article>

            <section className="work" id="work">
                <h2 className="heading"> My <span>Models</span></h2>
                <div className="Work_container">
                    <div className="work-box">
                      
                        <h3> T.T.I Model </h3>
                        <p> "machine learning models that generate images from text descriptions."</p>
                        <Link to='/TTI' className="btn">Read More
                        </Link>
                    </div>

                    <div className="work-box">
                       
                        <h3> T.T.V Model </h3>
                        <p>"Deep learning models that generate videos from text descriptions."</p>
                        <Link to='/TTV' className="btn">Read More
                        </Link>
                        {/* <a href="#" className="btn">Read More</a> */}
                    </div>

                    <div className="work-box">
                      
                        <h3> T.T.S Model </h3>
                        <p>"Deep learning models that takes text as input and generates an audio signal."</p>
                        <Link to='/TTS' className="btn"> Read More </Link>
                        {/* <a href="#" className="btn">Read More</a> */}
                    </div>
                </div>
            </section>



        </>
    )
}
export default Main;