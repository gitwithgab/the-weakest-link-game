import React from 'react';
import LogoWk from "../assets/img/logo-wk.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <>
        
            <Link to="/">

                 <img className="logo" src={LogoWk} alt="Weakest Link Logo"/>
            
            </Link>

        </>
    )
}

export default Logo
