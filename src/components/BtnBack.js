import React from 'react';
import { Link } from "react-router-dom";

const BtnBack = () => {
    return (
        <>
            <Link to="/">
               
               <button className="btn" type="button" id="cashButton">CANCEL</button>
          
            </Link> 
        </>
    )
}

export default BtnBack
