import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import 'tailwindcss/tailwind.css';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={0.8}
      flipSpeedFrontToBack={0.8}
    >
      {/* Front of the Flashcard */}
      <div className="flex justify-center items-center flex-col h-[400px] w-[600px] bg-gradient-to-br from-[#111111] to-[#191919] rounded-xl shadow-2xl p-8">
        <h1 className="font-extrabold text-3xl text-white text-center tracking-wide">{flashcard.question}</h1>
        <button
          onClick={handleClick}
          className="mt-8 p-4 rounded-full bg-[#F1684D] text-white hover:bg-[#d45e46] shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Show Answer
        </button>
      </div>

      {/* Back of the Flashcard */}
      <div className="flex justify-center items-center flex-col h-[400px] w-[600px] bg-gradient-to-br from-[#111111] to-[#191919] rounded-xl shadow-2xl p-8">
        <h1 className="font-extrabold text-3xl text-white text-center tracking-wide">{flashcard.answer}</h1>
        <button
          onClick={handleClick}
          className="mt-8 p-4 rounded-full bg-[#F1684D] text-white hover:bg-[#d45e46] shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Show Question
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
