import { useState } from "react";
import SideNav from "@/components/Sidepanel";
import FlashcardForm from "@/components/FlashcardForm";
// import MobileNav from "@/components/Mobilenav";
// import useIsMobile from "@/hooks/miscellaneous/useMobile";
import { useCreateFlashCardMutation } from "@/hooks/mutation/useCreateFlashCardMutation";
import { useDeleteFlashCardMutation } from "@/hooks/mutation/useDeleteFlashCardMutation";
import { useGetFlashCards } from "@/hooks/queries/useGetFlashCards"; // Import your custom hook
import { toast } from 'sonner';

const AdminPage = () => {
  // Fetch flashcards using the custom hook
  // const isMobile = useIsMobile();
  const { data: flashcards = [], refetch } = useGetFlashCards();
  const createFlashCardMutation = useCreateFlashCardMutation({ onSuccess: (data) => {
    if (data.success) {
      toast({
        description: "CSV sent successfully!",
      });
    } else {
      toast({
        description: "Failed to send CSV. Please try again.",
      });
    }
  },

  onError: (error) => {
    console.error("Error sending CSV:", error);
  },});
  const deleteFlashCardMutation = useDeleteFlashCardMutation();
  
  const handleCreate = async (payload) => {
    try {
      await createFlashCardMutation.mutateAsync(payload);
      toast({
        description: "Document Signed and Sent to your email",
      });
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
    <div className="flex min-h-screen w-full flex-row">
      <SideNav />
    <div className="flex bg-[#111111] text-white font-inter w-full md:ml-64 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 mt-8 sm:mt-0">Dashboard</h1>
        <FlashcardForm onCreate={handleCreate} />
        <ul className="mt-6 space-y-4">
          {flashcards.map((flashcard) => (
            <li
              key={flashcard.id}
              className="flex justify-between items-center p-4 bg-[#1F1F1F] border border-[#333333] rounded-lg shadow-md"
            >
              <span className="text-lg font-semibold">{flashcard.question}</span>
              <button
                onClick={() => handleDelete(flashcard.id)}
                className="bg-[#C7534D] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* {isMobile && <MobileNav />} */}
    </div>
  );
};

export default AdminPage;
