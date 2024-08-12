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
      <div className="flex justify-center items-center flex-col h-[400px] w-[300px] md:w-[500px] md:h-[400px] rounded-lg shadow-lg p-8 border border-[#2D2D2D] relative bg-[#111111] font-inter">
  <span className="absolute top-4 left-4 bg-[#C7534D] text-white text-m font-normal px-3 py-1 rounded-full">
    Question
  </span>
  {/* <hr className="border-t border-[#2D2D2D] w-full mb-20" /> */}
  <h1 className="font-inter font-normal text-2xl text-white tracking-wide">
    {flashcard.question}
  </h1>
  <button
    onClick={handleClick}
    className="absolute bottom-4 right-4 px-6 py-2 rounded-full bg-[#333333] text-white border border-[#C7534D] hover:bg-[#444444] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    Show Answer
  </button>
</div>

      {/* Back of the Flashcard */}
      <div className="flex justify-center items-center flex-col h-[400px] w-[500px] rounded-lg shadow-lg p-8 border border-[#2D2D2D] relative bg-[#111111] font-inter">
        <span className="absolute top-4 left-4 bg-[#C7534D] text-white text-m font-normal px-3 py-1 rounded-full">
          Answer
        </span>
        <h1 className="font-semibold text-2xl text-white text-center tracking-wide">
          {flashcard.answer}
        </h1>
        <button
          onClick={handleClick}
          className="absolute bottom-4 right-4 px-6 py-2 rounded-full bg-[#333333] text-white border border-[#C7534D] hover:bg-[#444444] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    Show Question
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;