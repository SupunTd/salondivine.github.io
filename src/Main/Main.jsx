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
                <video src="https://www.shutterstock.com/shutterstock/videos/1044577582/preview/stock-footage-pretty-girl-with-long-loose-fair-hair-in-wedding-dress-walks-along-room-and-stops-to-look-in-mirror.webm" autoPlay loop muted/>
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