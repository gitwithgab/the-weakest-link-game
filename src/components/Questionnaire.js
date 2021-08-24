import React from 'react';


const Questionnaire = ( { handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {

    const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);


    return (

        <div className="questions">

                <div>

                    <button  dangerouslySetInnerHTML={{ __html: question}}></button>

                </div>

                <div>

                        {shuffleAnswers.map(answer => (

                        <button 

                            dangerouslySetInnerHTML={{ __html: answer}}
                            onClick={() => handleAnswer(answer)}>
                            
                        </button>

                    ))}

                </div>

        </div>
    )
};



export default Questionnaire
