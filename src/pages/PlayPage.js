import React from 'react';
import Logo from "../components/Logo";
import MoneyTree from "../components/MoneyTreeList";
import Questions from "../components/Questions";
import Timer from "../components/Timer";

const PlayPage = () => {
    return (
        <>

            <div id="play-container">

                <div>

                    <div>

                        <MoneyTree />

                    </div>

                    <div>

                        <Questions />

                        <div>

                            <h5>Image</h5>
                            
                            <div>

                                <h4>Name</h4>
                            
                            </div>
                        </div>

                    </div>

                    <div>

                        <Logo />
                        
                        <div>
                            <Timer />
                        </div>
                        
                    </div>
                
                </div>
            
            </div>

        </>
    )
}

export default PlayPage
