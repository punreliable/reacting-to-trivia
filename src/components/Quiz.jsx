import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {

  let myQuestions = ['one', 'two', 'three' ];

  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    
    function handleSelectAnswer( selectedAnswer ) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      }
    );
  },
  []);

  const handleSkipAnswer = useCallback( () => handleSelectAnswer( null ), [handleSelectAnswer] );

  if (quizIsComplete) {
    return(
      <>
      <img src={quizCompleteImg} alt="Quiz is Complete Image" />
    <Summary userAnswers={userAnswers} />
    </>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
