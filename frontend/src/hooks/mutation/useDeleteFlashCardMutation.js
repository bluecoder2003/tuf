import { ENDPOINTS } from "@/utils/api.config";
import { client } from "@/utils/client";
import { useMutation } from "@tanstack/react-query";

export const useDeleteFlashCardMutation = (options) => {
  return useMutation({
    mutationFn: async (id) => {
      await client.delete(ENDPOINTS.DELETE_FLASHCARDS(id));
    },
    ...options,
  });
};
