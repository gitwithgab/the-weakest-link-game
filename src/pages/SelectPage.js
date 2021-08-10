import React from 'react';
import Avatars from "../components/Avatars";
import BtnBack from '../components/BtnBack';
import BtnPlay from "../components/BtnPlay";

const SelectPage = () => {

    return (
        <>
            <div id="select-container">

                <h1>SELECT PLAYER</h1>

                <Avatars />

                <div>
                    <BtnBack />

                    <BtnPlay />
                </div>

            </div>
            
        </>
    )
}

export default SelectPage
