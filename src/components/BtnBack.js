import React from 'react';
import { Link } from "react-router-dom";

const BtnBack = () => {
    return (
        <>
            <Link to="/">
               
               <button className="btn" type="button" id="cashButton">BACK</button>
          
            </Link> 
        </>
    )
}

export default BtnBack
