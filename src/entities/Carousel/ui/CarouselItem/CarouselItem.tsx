import { ICarouselItem } from "../../model/types/carouselSchema";
import Image from "next/image";
import cn from "clsx";
import { useCarousel } from "../../model/hooks/useCarousel";

interface CarouselItemProps {
    item: ICarouselItem;
}

export const CarouselItem = (props: CarouselItemProps) => {
    const { item } = props;
    const { currentId } = useCarousel();

    const isActive = currentId === item.id;

    return (
        <div className={cn("mx-14", isActive ? "w-1/2" : "w-1/4")}>
            <Image
                src={item.image}
                alt="F"
                width={700}
                height={394}
                className="rounded-xl shadow-lg overflow-hidden "
            />
            <div
                className={cn(
                    "w-1/2 mx-auto mt-10 bg-[#5DB7EE] h-2 rounded transition-all duration-300 ease-in-out",
                    isActive ? "w-1/2" : "w-0"
                )}
            />
        </div>
    );
};
