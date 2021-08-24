import React from 'react';
import { Link } from "react-router-dom";
import Avatars from "../components/Avatars";
/*import selAvatarContext from '../context/SelAvatarContext';*/


const SelectPage = () => {


    /*
    const { selAvatars } = useContext(selAvatarContext);
    */

    let handleClick = () => {
        

    };

    return (
        <>
            <div id="select-container">

                <h1>SELECT PLAYER</h1>
                
                <div>
                    <Avatars />
                </div>

                <div>
                    <Link to="/">
                    
                        <button className="btn" type="button" id="cashButton">CANCEL</button>
                
                    </Link> 

                    <Link to="/play">
               
                        <button className="btn" type="button" id="cashButton"
                                onClick={handleClick}>ACCEPT
                        </button>
                
                    </Link> 
                </div>

            </div>
            
        </>
    )
}

export default SelectPage
