import React, { useState, useEffect, useContext }  from 'react';
import Logo from "../components/Logo";
import MoneyTree from "../components/MoneyTreeBtns";
import Timer from "../components/Timer";
import Trivia from "../components/Trivia";
import selAvatarContext from '../context/SelAvatarContext';
import roundOneContext from "../context/RoundOneContext";

const API_URL = 'https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple';


const PlayPage = (props) => {

    const { selAvatars } = useContext(selAvatarContext);
   const { roundOneMt } = useContext(roundOneContext);
    const [question, setQuestions] = useState([]);
    const [currentMtIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswers,setShowAnswers] = useState(false);
    const [bank, setBank] = useState(0);
    const avatarImage = require(`../assets/img/${selAvatars.imgFull}`).default;
    const avatarName = selAvatars.name;


    useEffect (() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {

                const questions = data.results.map((question) =>
                ({
                    ...question,
                    answers: [question.correct_answer,...question.incorrect_answers
                    ].sort(() => Math.random() - 0.5)
                }))

                setQuestions(questions);

            });
    }, []);


    const bankScore =() =>
    {

        let bankVal = bank;

        const roundCash = [...roundOneMt];

        const activeCash = roundCash.find((cash)=>{return cash.isActive ===true});

        let cashVal = activeCash.valueAmount;

        bankVal = bankVal + cashVal;

        setBank(bankVal);

    }
/*
    const handleAnswer = (answer, cash, cashVal) => {

        const roundCash = [...roundOneMt];
        
        const newMtIndex = currentMtIndex + 1

        const activeCash = roundCash.find((cash)=>{return cash.isActive ===true});

        setCurrentMtIndex(newMtIndex)

        if (answer === question[currentIndex].correct_answer)
        {

            activeCash.isActive = false;

        }

        let seldIndex = roundCash.find((cash) = cash.id === props.id)

        seldIndex.isActive = true;

        setRoundOneMt(seldIndex[newMtIndex]);

        setShowAnswers(true);
        
        if (answer === question[currentIndex].correct_answer)
        {
            setBank(cashVal)
        }

    };
*/

const handleAnswer = (answer, cashVal) => {

    setShowAnswers(true);
    
    if (answer === question[currentIndex].correct_answer)
    {
        setBank(cashVal)
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

                        <div className="money-tree"> 

                                {roundOneMt.map((cash, index)=>(<MoneyTree 
                                                                key={cash.id} 
                                                                valueAmount={cash.valueAmount} 
                                                                isActive={cash.isActive}                                                                 className={index === currentMtIndex ? 'dollar-values active' : 'dollar-values'}
                                                                />))}
                        </div>
                       
                        <div >


                        </div>

                        <div className="test">
                              
                            <h1>
                                    ${bank}
                            </h1>

                             <button onClick={bankScore}>BANK</button>

                        </div>

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
