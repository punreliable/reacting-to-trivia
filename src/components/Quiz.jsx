import { useState } from 'react';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]); 
 
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    function handleSelectAnswer( selectedAnswer ) {
        setUserAnswers( (prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }
    
    return (
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map(
                    <li key={answer} className="answer">
                        <button onClick={ () => { handleSelectAnswer(answer) } }>{answer}</button>
                    </li>
                )}
            </ul>
    
        </div>

    );
    

}

export default Quiz;
