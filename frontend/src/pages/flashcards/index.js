import { useState } from "react";
import Flashcard from "../../components/Flashcard";
import { useGetFlashCards } from "@/hooks/queries/useGetFlashCards"; // Adjust the path as necessary

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
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
      {flashcards.length > 0 && (
        <Flashcard flashcard={flashcards[currentIndex]} />
      )}
      <div className="mt-4">
        <button
          onClick={prevFlashcard}
          className="bg-[#F1684D] text-white px-4 py-2 rounded-3xl mr-2"
        >
          Previous
        </button>
        <button
          onClick={nextFlashcard}
          className="bg-[#F1684D] text-white px-4 py-2 rounded-3xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardsPage;
