import React, { useState, useEffect, useContext }  from 'react';
import Logo from "../components/Logo";
import MoneyTree from "../components/MoneyTreeList";
import Timer from "../components/Timer";
import Trivia from "../components/Trivia";
import selAvatarContext from '../context/SelAvatarContext';


const API_URL = 'https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple';


const PlayPage = () => {

    const { selAvatars } = useContext(selAvatarContext);
    const [question, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswers,setShowAnswers] = useState(false);
    const [bank,setBank] = useState(0);
    const avatarImage = require(`../assets/img/${selAvatars.imgFull}`).default;
    const avatarName = selAvatars.name;


    useEffect (() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {

                setQuestions(data.results);

            });
    }, []);
    

    const handleAnswer = (answer) => {

        setShowAnswers(true);
        
        if (answer === question[currentIndex].correct_answer)
        {
            setBank()
        }
        
    };

    const handleNextQuestion = () => {
        
        setShowAnswers(false);

        const newIndex = currentIndex + 1;
        
        setCurrentIndex(newIndex);
    }

  

    return question.length > 0 ? (
        <>

            <div id="play-container">

                    <div>

                        <MoneyTree 
                            bank={bank}
                        />

                    </div>

                    <div>   

                        <div>
                            
                            <Trivia 
                                data={question[currentIndex]} 
                                showAnswers={showAnswers}
                                handleNextQuestion={handleNextQuestion}
                                handleAnswer={handleAnswer} 
                            />    
                        
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
