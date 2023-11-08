import Header from './components/Header';
import Quiz from './components/Quiz';
import questions from './questions';


const App = () => {
    return(
        <>
            <Header />
            <main>
                <Quiz />
            </main>
        </>
    )
}

export default App;
