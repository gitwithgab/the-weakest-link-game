import React from 'react';


const Trivia = ( { showAnswers,
                   handleNextQuestion,
                   handleAnswer, 
                   data: {question, correct_answer, incorrect_answers} 
                }) => {


    const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(() => (Math.floor(Math.random) * 2) + 1);

    
    return (

        <div className="questions">

                <div>

                    <button  dangerouslySetInnerHTML={{ __html: question}}></button>

                </div>

                <div>

                        {shuffleAnswers.map(answer => (
                        
                        <button 

                            className ={showAnswers ? answer === correct_answer ? "correct" : "incorrect" : "inactive"}
                            onClick={() => handleAnswer(answer)}
                            dangerouslySetInnerHTML={{ __html: answer}}
                            >
                            
                        </button>

                        ))}

                </div>

                {showAnswers && (

                <div className="next-btn">
                        <button
                            onClick={handleNextQuestion}>
                            Next
                        </button>
                </div>
                
                )}


        </div>


    )
};



export default Trivia
