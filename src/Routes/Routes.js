import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home/home";
import About from "../Components/About/about";
import MyWork from "../Components/MyWork/mywork";
import Contact from "../Components/Contact/contact";

const PagesRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/myWork" element={<MyWork/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default PagesRoutes
