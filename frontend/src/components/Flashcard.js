import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import 'tailwindcss/tailwind.css';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8}>
      <div className="flex justify-center items-center flex-col h-[400px] w-[600px] bg-gradient-to-r from-green-100 to-green-300 rounded-xl shadow-lg p-4">
        <h1 className="font-bold text-2xl text-gray-800">{flashcard.question}</h1>
        <button onClick={handleClick} className="mt-4 p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-md transform hover:scale-105 transition-all duration-300">
          Answer
        </button>
      </div>
      <div className="flex justify-center items-center flex-col h-[400px] w-[600px] bg-gradient-to-r from-green-100 to-green-300 rounded-xl shadow-lg p-4">
        <h1 className="font-bold text-2xl text-gray-800">{flashcard.answer}</h1>
        <button onClick={handleClick} className="mt-4 p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-md transform hover:scale-105 transition-all duration-300">
          Question
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
