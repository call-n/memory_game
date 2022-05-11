import './App.css';
import { useState } from 'react';

const cardImages = [
    { "src": "/img/helmet-1.png" },
    { "src": "/img/potion-1.png" },
    { "src": "/img/ring-1.png" },
    { "src": "/img/scroll-1.png" },
    { "src": "/img/shield-1.png" },
    { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([])

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
  }

  console.log(cards)

  return (
    <div className="App">
      <button onClick={shuffleCards} >Restart Game</button>
    </div>
  );
}

export default App;
