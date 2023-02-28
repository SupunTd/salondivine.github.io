import React from "react";
import './Packages.css'
import Logbar from "../Components/Header/Logbar/Logbar";
import Navbar from "../Components/Header/Navbar/Navbar";
const Packages = () => {

    return (
        <>
            <Logbar/>
            <Navbar/>

            <div className="salon-packages">
                <div className="package">
                    <img src="https://example.com/package1.jpg" alt="Package 1" />
                    <h2>Package 1</h2>
                    <p>Includes haircut, wash, and blowout</p>
                    <h3>$50</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://example.com/package2.jpg" alt="Package 2" />
                    <h2>Package 2</h2>
                    <p>Includes haircut, wash, blowout, and color</p>
                    <h3>$100</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://example.com/package3.jpg" alt="Package 3" />
                    <h2>Package 3</h2>
                    <p>Includes haircut, wash, blowout, color, and highlights</p>
                    <h3>$150</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://example.com/package4.jpg" alt="Package 4" />
                    <h2>Package 4</h2>
                    <p>Includes haircut, wash, blowout, color, highlights, and conditioning treatment</p>
                    <h3>$200</h3>
                    <button>Book Now</button>
                </div>
            </div>
        </>
    );
};


export default Packages;
