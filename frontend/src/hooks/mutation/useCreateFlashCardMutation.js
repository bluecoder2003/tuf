import { ENDPOINTS } from "@/utils/api.config";
import { client } from "@/utils/client";
import { useMutation } from "@tanstack/react-query";

export const useCreateFlashCardMutation = (options) => {
  return useMutation({
    mutationFn: async (payload) => {
      const res = await client.post(ENDPOINTS.CREATE_FLASHCARDS, {
        json: payload,
      });
      return res.json();
    },
    ...options,
  });
};
