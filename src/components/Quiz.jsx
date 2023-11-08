import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
    const handleSelectAnswer = useCallback(function handleSelectAnswer(
      selectedAnswer
    ) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []);
  
    const handleSkipAnswer = useCallback(
      () => handleSelectAnswer(null),
      [handleSelectAnswer]
    );
  
    if (quizIsComplete) {
      return <Summary userAnswers={userAnswers} />
    }
    
    return (

        <div id="quiz">

            <div id="question">

                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

                <ul id="answers">

                    { QUESTIONS[activeQuestionIndex].answers.map(

                        <li key={answer} className="answer">

                            <button onClick={ () => { handleSelectAnswer( answer ) } }>
                                {answer}
                            </button>
                            
                        </li>

                    )}

                </ul>

            </div>

        </div>

    );

}

export default Quiz;
