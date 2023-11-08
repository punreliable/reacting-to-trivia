import { useState } from 'react';


const QuestionTimer = ({ timeout, onTimeout }) => {
    
    const [remainingTime, setRemainingTime] = useState( timeout );
    
    useEffect( () => {
        setTimeout( onTimeout, timeout );
    }, [ timeout, onTimeout ] );

    useEffect( () => {

        setInterval( () => { 
            setRemainingTime( prevRemainingTime => prevRemainingTime - 100 );
        }, 100 );

    }, [prevRemainingtime] );



    return(
        <progress id="question-time" max={timeout} value={remainingTime} />
    );

}

export default QuestionTimer;
