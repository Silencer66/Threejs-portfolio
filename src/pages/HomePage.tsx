import { useAppSelector } from "@/shared/hooks/useTypedSelector";

export function HomePage() {
    const carouselItems = useAppSelector((state) => state.items);
    return (
        <div className="m-20">
            <h1 className="text-7xl text-center font-medium">
                hello how are you
            </h1>
            <section>
                {carouselItems.map((item) => (
                    <div key={item.id}>{item.id}</div>
                ))}
            </section>
        </div>
    );
}
