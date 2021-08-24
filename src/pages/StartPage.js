import React from 'react';
import BtnStart from '../components/BtnStart';
import BgImage from '../assets/img/welcomeBackground.jpg'


const StartPage = () => {
    return (
        <>
             
            <div id="start-page"
                    style={{
                        backgroundImage:`url(${BgImage})`,
                        minHeight: '100vh',
                        width: '100vw',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }} >
            
                <div>
                    <BtnStart />
                </div>

            </div>
        </>
    )
}

export default StartPage
