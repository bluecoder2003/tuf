import { ENDPOINTS } from "@/utils/api.config";
import { client } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export const useGetFlashCards = () => {
  return useQuery({
    queryKey: ["flashcards"],
    queryFn: async () => {
      const res = await client.get(ENDPOINTS.GET_FLASHCARDS);
      const config = res.json();

      return config;
    },
  });
};
