import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.jsx';
import QuestionTimer from './QuestionTimer.jsx';

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answsers];
    shuffledAnswers.sort( () => Math.random() - 0.5 );
    
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

            <QuestionTimer timeout={10000} onTimeout={ handleSelectAnswer(null) } />

            <div id="question">

                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

                <ul id="answers">

                  { shuffledAnswers([activeQuestionIndex].answers.map(
                    <li key={answer} className="answer">

                        <button onClick={ () => { handleSelectAnswer( answer ) } }>
                            {answer}
                        </button>
                        
                    </li>


                  ))}

                </ul>

            </div>

        </div>

    );

}

export default Quiz;
