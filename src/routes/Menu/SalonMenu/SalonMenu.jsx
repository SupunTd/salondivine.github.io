import React from 'react';
import './SalonMenu.css';
import Logbar from "../../../Components/Header/Logbar/Logbar";
import Navbar from "../../../Components/Header/Navbar/Navbar";
function SalonMenu() {
    return (
        <>
        <Logbar/>
        <Navbar/>
        <div className="image-matrix">
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/564x/7a/1f/fe/7a1ffe03caea1dc43a60f987aa4e5bd5.jpg" alt="di1" />
                    <button>Add to Cart</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/e8/e8/7a/e8e87a5cb6f0e716ad6eeca0d4fa6422.jpg" alt="di 2"/>
                    <button>Button 2</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/87/f7/d4/87f7d4f0de977014e4ffc5cb30127e82.jpg" alt="di 3" />
                    <button>Button 3</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/65/e2/a8/65e2a80bb0b094bf32bdbf7440128b86.jpg" alt="di 4" />
                    <button>Button 4</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/564x/4a/ca/70/4aca70b3e309107d408444916e2e2724.jpg" alt="Image 5" />
                    <button>Button 5</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/7b/a2/0e/7ba20e16bc7ec870bd117bdd1ae25721.jpg" alt="Image 6" />
                    <button>Button 6</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/ba/68/68/ba6868b6ddd6b60449c9448a25a0fb34.jpg" alt="Image 7" />
                    <button>Button 7</button>
                </div>
                <div className="column">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src="https://i.pinimg.com/564x/9a/3d/a6/9a3da642e256a5e7b171989c0e8c6ea0.jpg" alt="Image 8" />
                    <button>Button 8</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/736x/6c/1b/b9/6c1bb97b73861026e7db0b2fb38f8f2e.jpg" alt="Image 9" />
                    <button>Button 9</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/0e/19/1d/0e191d0e77628a9eb225526f08ac6684.jpg" alt= "Image 10" />
                    <button>Button 10</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/d6/77/b5/d677b5c019a01d0410425985e00741de.jpg" alt="Image 11" />
                    <button>Button 11</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/85/10/6f/85106f82565383a226cfba04a9480b8b.jpg" alt="Image 12" />
                    <button>Button 12</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/564x/76/20/9d/76209dea0479dae9ff19cc047db79dea.jpg" alt="Image 13" />
                    <button>Button 13</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/55/59/ce/5559ce39d4be7ab5838ee48bb9896f5c.jpg" alt="Image 14" />
                    <button>Button 14</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/56/19/99/561999a0b4936527bd1e3fee4f143a98.jpg" alt="Image 15" />
                    <button>Button 15</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/67/d0/b4/67d0b4f4b2e4401e521a0ef2994dd740.jpg" alt="Image 16" />
                    <button>Button 16</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SalonMenu;
