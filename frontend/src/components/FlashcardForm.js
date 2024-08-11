import { useState } from "react";
import { useCreateFlashCardMutation } from "@/hooks/mutation/useCreateFlashCardMutation";

const FlashcardForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // Initialize the mutation
  const createFlashCardMutation = useCreateFlashCardMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the mutation to create a flashcard
      await createFlashCardMutation.mutateAsync({ question, answer });

      // Clear form fields after successful submission
      setQuestion("");
      setAnswer("");
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
        className="text-black p-2 rounded-md "
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
        className="text-black p-2 rounded-md "
      />
      <button type="submit" className="p-2 rounded-md bg-green-500">
        Add Flashcard
      </button>
    </form>
  );
};

export default FlashcardForm;
