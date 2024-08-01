import { useCarousel } from "../../model/hooks/useCarousel";
import { CarouselItem } from "../CarouselItem/CarouselItem";

export const Carousel = () => {
    const { items } = useCarousel();

    return (
        <div className="mt-10 flex items-center">
            {items.length ? (
                items.map((item) => <CarouselItem item={item} key={item.id} />)
            ) : (
                <div>Elements not found</div>
            )}
        </div>
    );
};
