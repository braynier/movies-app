import { create } from "zustand";
import { FavoritesState } from "../types/favorites";

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),

  addFavorite: (movie) =>
    set((state) => {
      const favorites = [...state.favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favorites };
    }),

  removeFavorite: (id) =>
    set((state) => {
      const favorites = state.favorites.filter((movie) => movie.id !== id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favorites };
    }),
}));
