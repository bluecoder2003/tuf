export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const VERSION = "/api";

export const ENDPOINTS = {
  GET_FLASHCARDS: "flashcards",
  CREATE_FLASHCARDS: "flashcards",
  DELETE_FLASHCARDS: (id) => `flashcards/${id}`,
  UPDATE_FLASHCARDS: (id) => `flashcards/${id}`,
};
