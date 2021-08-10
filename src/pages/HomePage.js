import React from 'react';
import homeBg from "../assets/img/welcomeBackground.png";
import BtnStart from '../components/BtnStart';

const HomePage = () => {
    return (
        <>
            <div id="start-page"
            style={{ backgroundImage: `url(${homeBg})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width:'100%',
            minHeight:'100vh'
            }}>

                <BtnStart />

            </div>
        </>
    )
}

export default HomePage
