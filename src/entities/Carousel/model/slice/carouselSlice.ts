import { createSlice } from "@reduxjs/toolkit";
import { ICarousel } from "../types/carouselSchema";

import image1 from "../../../../../public/images/carousel1.jpg"; 
import image2 from "../../../../../public/images/carousel2.jpg"; 
import image3 from "../../../../../public/images/carousel3.jpg"; 

const initialState: ICarousel = {
    currentId: 1,
    items: [
        { id: 1, image: image1.src },
        { id: 2, image: image2.src },
        { id: 3, image: image3.src },
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
