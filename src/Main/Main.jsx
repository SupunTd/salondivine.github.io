import React from "react";
import "../index.css";
import Logbar from '../Components/Header/Logbar/Logbar';

import Footer from "../Components/Footer/Footer";
import Makeap from "./Makeap/Makeap";
import Navbar from "../Components/Header/Navbar/Navbar";
const Main = () =>
{
    return (
        <>
            <Logbar/>

            <Navbar/>

            <div className="main">
                <div className="overlay1"></div>
                <video src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/PkCzQ9J/videoblocks-scissors-cut-hair-close-up_sw7dtgfpz__6a317ccde16caf99848bcfc05c823de3__P360.mp4" autoPlay loop muted/>
                <div className= "content1">
                    <h1>Indian Bridal Dressing</h1>
                </div>
                <Makeap/>
            </div>
            <Footer/>

        </>
    );
}

export default Main;