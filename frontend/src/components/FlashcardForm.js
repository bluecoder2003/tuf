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
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
        className="bg-[#1F1F1F] text-white p-2 rounded-md border-[#333333] "
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
        className="bg-[#1F1F1F] text-white p-2 rounded-md border-[#333333]"
      />
      <button type="submit" className="p-2 rounded-md bg-[#C7534D] hover:bg-[#942F2F]">
        Add Card
      </button>
    </form>
  );
};

export default FlashcardForm;
