import { Carousel } from "@/entities/Carousel";

export function HomePage() {
    return (
        <div className="m-20">
            <h1 className="text-7xl text-center font-medium">Portfolio</h1>
            <Carousel />
        </div>
    );
}
