import { useAppSelector } from "@/shared/hooks/useTypedSelector";

export const useCarousel = () => useAppSelector((state) => state.carousel);
