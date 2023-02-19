import React from "react";
import Main from "./Main/Main";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import Menu from "./routes/Menu";
import DressMenu from "../src/routes/Menu/DressMenu/DressMenu";
import SalonMenu from "../src/routes/Menu/SalonMenu/SalonMenu";
import SpaMenu from "../src/routes/Menu/SpaMenu/SpaMenu";
import PackageMenu from "../src/routes/Menu/PackageMenu/PackageMenu";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/DressMenu" element={<DressMenu />} />
                <Route path="/SalonMenu" element={<SalonMenu />} />
                <Route path="/SpaMenu" element={<SpaMenu />} />
                <Route path="/PackageMenu" element={<PackageMenu />} />
            </Routes>
        </>
    );
}

export default App;
