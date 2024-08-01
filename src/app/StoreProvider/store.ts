import { carouselSlice } from "@/entities/Carousel/model/slice/carouselSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        carousel: carouselSlice.reducer,
    },
});

export type TypeRootState = ReturnType<typeof store.getState>;
