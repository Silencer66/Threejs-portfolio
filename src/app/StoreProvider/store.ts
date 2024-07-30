import { carouselSlice } from "@/features/Carousel/model/slice/carouselSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: carouselSlice.reducer,
});

export type TypeRootState = ReturnType<typeof store.getState>;
