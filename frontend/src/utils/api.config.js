export const BASE_URL = "http://localhost:3001";
export const VERSION = "/api";

export const ENDPOINTS = {
  GET_FLASHCARDS: "flashcards",
  CREATE_FLASHCARDS: "flashcards",
  DELETE_FLASHCARDS: (id) => `flashcards/${id}`,
  UPDATE_FLASHCARDS: (id) => `flashcards/${id}`,
};
