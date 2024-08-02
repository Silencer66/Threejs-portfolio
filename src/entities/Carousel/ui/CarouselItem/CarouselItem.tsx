import { ICarouselItem } from "../../model/types/carouselSchema";
import Image from "next/image";
import cn from "clsx";
import { useCarousel } from "../../model/hooks/useCarousel";
import { useActionState } from "react";
import useActions from "@/shared/hooks/useActions";

interface CarouselItemProps {
    item: ICarouselItem;
}

export const CarouselItem = (props: CarouselItemProps) => {
    const { item } = props;
    const { currentId } = useCarousel();
    const { changeCurrentId } = useActions();

    const isActive = currentId === item.id;

    return (
        <div className={cn("mx-14", isActive ? "w-1/2" : "w-1/4")}>
            <button onClick={() => changeCurrentId(item.id)}>
                <Image
                    src={item.image}
                    alt="F"
                    width={700}
                    height={394}
                    className="rounded-xl shadow-lg overflow-hidden "
                />
            </button>

            <div
                className={cn(
                    "mx-auto mt-10 bg-red-aqua h-2 rounded transition-all duration-500 ease-in-out",
                    isActive ? "w-1/2" : "w-0"
                )}
            />
        </div>
    );
};
