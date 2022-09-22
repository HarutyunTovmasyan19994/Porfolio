import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home/home";
import About from "../Components/About/about";
import MyWork from "../Components/MyWork/mywork";
import Contact from "../Components/Contact/contact";
import Education from "../Components/Education/education"

const PagesRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' exact={true} element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/myWork" element={<MyWork/>}/>
                <Route path="/contact" element={<Contact/>}/>

            </Routes>
        </div>
    )
}
export default PagesRoutes
