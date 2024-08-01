import { carouselSlice } from "@/entities/Carousel/model/slice/carouselSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
        () => bindActionCreators(carouselSlice.actions, dispatch),
        [dispatch]
    );
};

export default useActions;
