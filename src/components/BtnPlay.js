import React from 'react';
import { Link } from "react-router-dom";

const BtnPlay = () => {
    return (
        <>
            
            <Link to="/play">
               
               <button className="btn" type="button" id="cashButton">PLAY</button>
          
            </Link> 

        </>
    )
}

export default BtnPlay
