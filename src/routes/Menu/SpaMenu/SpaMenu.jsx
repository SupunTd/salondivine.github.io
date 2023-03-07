import React from 'react';
import './SpaMenu.css';
import Logbar from "../../../Components/Header/Logbar/Logbar";
import Navbar from "../../../Components/Header/Navbar/Navbar";
function SpaMenu() {
    return (
        <>
        <Logbar/>
        <Navbar/>
        <div className="image-matrix">
            <div className="row">
                <div className="column">
                    <img src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di1" />
                    <button>Button 1</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 2"/>
                    <button>Button 2</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 3" />
                    <button>Button 3</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4210657/pexels-photo-4210657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 4" />
                    <button>Button 4</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
                    <button>Button 5</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5240817/pexels-photo-5240817.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 6" />
                    <button>Button 6</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069406/pexels-photo-5069406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 7" />
                    <button>Button 7</button>
                </div>
                <div className="column">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src="https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 8" />
                    <button>Button 8</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/236x/5d/e8/f7/5de8f7e322f7dd4793fc44af244ddf71.jpg" alt="Image 9" />
                    <button>Button 9</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/236x/cc/1a/79/cc1a793942c4429918a2199bc0c1df20.jpg" alt= "Image 10" />
                    <button>Button 10</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4126730/pexels-photo-4126730.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 11" />
                    <button>Button 11</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 12" />
                    <button>Button 12</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SpaMenu;
