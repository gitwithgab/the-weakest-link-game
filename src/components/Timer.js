import React, { useState, useEffect } from 'react';

const Timer = (minsSecs) => {

/*
    const ROUND_1_START_TIME = 120;
    const TIMER_SPEED = 1000;
    let [roundOneTimer, setRoundOneTimer] = useState(ROUND_1_START_TIME);

    useEffect(() => {
   
        let interval = setInterval(() => {

  
            setRoundOneTimer(roundOneTimer--);
            

            if (roundOneTimer === 0)
            {
                clearInterval(interval);
            }


        }, TIMER_SPEED)


    }, [roundOneTimer])*/

    const { minutes1 = 1, seconds1 = 60} = minsSecs;
    const [[mins1, secs1], setRoundOneTimer] = useState([minutes1, seconds1]);

    const tick = () => {
        if (mins1 === 0 && secs1 === 0)
        {
            startRoundTwo()
        }
        else if (secs1 === 0)
        {
            setRoundOneTimer([mins1 -1, 59]);
        }
        else {
            setRoundOneTimer([mins1, secs1 -1]);
        }
    };
 
    const startRoundTwo = () => setRoundOneTimer ([parseInt(minutes1), parseInt(seconds1)]);
    
    useEffect (() => {

        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
   
    })



    return (
        <>
            <div className = "timer">

                <h4> {`${mins1.toString().padStart(1,'0')}:${secs1.toString().padStart(2,'0')}`} </h4>
            
            </div>
        </>
    )
}

export default Timer
