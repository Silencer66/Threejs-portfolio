import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { ICarousel } from "../types/carouselSchema";

const initialState: ICarousel = {
    currentId: 1,
    items: [
        { id: 1, image: "Пусто" },
        { id: 2, image: "Пусто" },
        { id: 3, image: "Пусто" },
    ],
};
export const carouselSlice = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        nextSlide: (state) => {
            const nextId = state.currentId + 1;
            if (state.items.some((x) => x.id === nextId)) {
                state.currentId = nextId;
            }
        },
        prevSlide: (state) => {
            const previousId = state.currentId - 1;
            if (state.items.some((x) => x.id === previousId)) {
                state.currentId = previousId;
            }
        },
    },
});
