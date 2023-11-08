import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    const title = 'Reacting to Trivia'
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>{title}</h1>
    </header>
  );
}
