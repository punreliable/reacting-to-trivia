import logoIMG from '../assets/quiz-logo.png';


const Header = () => {

    return(
        <header>
            <img src={logoIMG} alt="" />
            <h1>Reacting to Trivia</h1>
        </header>
    );

}

export default Header;
