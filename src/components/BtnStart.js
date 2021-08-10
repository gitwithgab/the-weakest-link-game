import React from 'react';
import { Link } from "react-router-dom";

const BtnStart = () => {
    return (
        <>
                       
            <Link to="/select">
               
                <button className="btn" type="button" id="cashButton">START</button>
           
             </Link> 
             
        </>
    )
}

export default BtnStart
