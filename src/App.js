import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./Main/Main";
import {Navigate, Routes} from "react-router";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import Menu from "./routes/Menu";
import DressMenu from "../src/routes/Menu/DressMenu/DressMenu";
import SalonMenu from "../src/routes/Menu/SalonMenu/SalonMenu";
import SpaMenu from "../src/routes/Menu/SpaMenu/SpaMenu";
import PackageMenu from "./routes/Packages";
import About from "./routes/About";

function App() {

    return (

                <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/About" element={<About />} />
                <Route path="/DressMenu" element={<DressMenu />} />
                <Route path="/SalonMenu" element={<SalonMenu />} />
                <Route path="/SpaMenu" element={<SpaMenu />} />
                <Route path="/PackageMenu" element={<PackageMenu />} />
                    <Route path ="*" element={<Navigate to="/"/>}></Route>
                </Routes>

    );
}

export default App;
