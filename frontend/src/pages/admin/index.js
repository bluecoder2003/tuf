import { useState } from "react";
import FlashcardForm from "@/components/FlashcardForm";
import { useCreateFlashCardMutation } from "@/hooks/mutation/useCreateFlashCardMutation";
import { useDeleteFlashCardMutation } from "@/hooks/mutation/useDeleteFlashCardMutation";
import { useGetFlashCards } from "@/hooks/queries/useGetFlashCards"; // Import your custom hook

const AdminPage = () => {
  // Fetch flashcards using the custom hook
  const { data: flashcards = [], refetch } = useGetFlashCards();
  const createFlashCardMutation = useCreateFlashCardMutation();
  const deleteFlashCardMutation = useDeleteFlashCardMutation();

  const handleCreate = async (payload) => {
    try {
      await createFlashCardMutation.mutateAsync(payload);
      refetch(); // Refetch flashcards after successful creation
    } catch (error) {
      console.error("Error creating flashcard:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFlashCardMutation.mutateAsync(id);
      refetch(); // Refetch flashcards after successful deletion
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <FlashcardForm onCreate={handleCreate} />
        <ul className="mt-4">
          {flashcards.map((flashcard) => (
            <li
              key={flashcard.id}
              className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded-lg"
            >
              {flashcard.question}
              <button
                onClick={() => handleDelete(flashcard.id)}
                className="bg-red-500 text-white px-4 py-1 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
