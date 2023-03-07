import React from "react";
import "../index.css";
import Logbar from '../Components/Header/Logbar/Logbar';

import Footer from "../Components/Footer/Footer";
import Makeap from "./Makeap/Makeap";
import Navbar from "../Components/Header/Navbar/Navbar";
import Services from "./Services/Services";

const Main = () =>
{
    return (
        <>
            <Logbar/>
            <Navbar/>
            <div className="main">
                <video src="https://player.vimeo.com/external/530268869.sd.mp4?s=1a17bea1516860a1867c82cced229c0fdc3ea883&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted/>
                <div className= "content1">
                    <h1 className="Title">Indian Bridal Dressing</h1>
                </div>
                <Makeap/>
            </div>
            <Services/>
            <Footer/>

        </>
    );
}

export default Main;