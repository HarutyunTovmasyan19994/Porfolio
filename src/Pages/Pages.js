import React from "react";
import Header from "../Components/Header/Header";
import PagesRoutes from "../Routes/Routes";
import Humburger from "../Components/Humburger/Humburger";
import {useSelector} from "react-redux";

const Pages = () => {
    const isHumburger = useSelector((state)=>state.user.isHumburger)
    return (
        <>
            <Header/>
            {
                isHumburger ? (<Humburger/>):( <PagesRoutes/>)
            }

        </>
    )
}

export default Pages
