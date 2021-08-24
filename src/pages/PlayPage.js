import React, { useState, useEffect, useContext }  from 'react';
import Logo from "../components/Logo";
import MoneyTree from "../components/MoneyTreeList";
import Timer from "../components/Timer";
import Questionnaire from "../components/Questionnaire";
import selAvatarContext from '../context/SelAvatarContext';



const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';


const PlayPage = () => {

    const { selAvatars } = useContext(selAvatarContext);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [response,setResponse] = useState("");
    const avatarImage = require(`../assets/img/${selAvatars.imgFull}`).default
    const avatarName = selAvatars.name


    useEffect (() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {

                setQuestions(data.results);
             
            });
    }, []);
    

    const handleAnswer = (answer) => {

        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        if(answer === questions[currentIndex].correct_answer)
        {
            setResponse("Correct!")
        }

        else
        {
            setResponse("Incorrect:(")
        }
    
    };



    return questions.length > 0 ? (
        <>

            <div id="play-container">

                    <div>

                        <MoneyTree />

                    </div>

                    <div>   

                        <div>
                            
                            <Questionnaire data={questions[currentIndex]} handleAnswer={handleAnswer} />    
                            
                            <h4 className="response">{response}</h4>
                        </div>

                        <div>
                            <div>

                                <h4>{avatarName}</h4>

                            </div>             

                            <img src = {avatarImage} alt=""/>
            
                        </div>

                    </div>

                    <div>

                        <Logo />
                        
                        <div>
                            <Timer />
                        </div>
                        
                    </div>
                
    
            
            </div>

        </>
    ): (
        <div className="loading">
            <h1> Loading...</h1>
        </div>
    )


}

export default PlayPage
