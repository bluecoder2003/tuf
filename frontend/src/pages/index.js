import { useState } from "react";
import Flashcard from "../components/Flashcard"
import { useGetFlashCards } from "@/hooks/queries/useGetFlashCards"; 
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import SideNav from "@/components/Sidepanel";

const FlashcardsPage = () => {
  const { data: flashcards = [], isLoading, error } = useGetFlashCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevFlashcard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  if (isLoading) return <p>Loading flashcards...</p>;
  if (error) return <p>Error fetching flashcards: {error.message}</p>;

  return (
    <div className="flex min-h-screen w-full sm:h-full flex-col md:flex-row">
  <SideNav className="hidden md:block" />
  
  <div className="flex flex-col min-h-screen justify-center items-center w-full p-4 bg-[#000000] md:ml-64 ">
    
    {flashcards.length > 0 && (
      <Flashcard flashcard={flashcards[currentIndex]} />
    )}

    <div className="mt-4 flex md:justify-center">
      <button
        onClick={prevFlashcard}
        className="text-white hover:text-[#444444] px-4 py-2 rounded-3xl mb-2 md:mb-0 md:mr-2"
      >
        <BsArrowLeftCircle size={36} />
      </button>
      <button
        onClick={nextFlashcard}
        className="text-white hover:text-[#444444] px-4 py-2 rounded-3xl mb-2 md:mb-0 md:mr-2"
      >
        <BsArrowRightCircle size={36} />
      </button>
    </div>
  </div>
</div>

  );
};

export default FlashcardsPage;
