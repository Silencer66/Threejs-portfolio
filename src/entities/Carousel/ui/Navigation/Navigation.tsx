import useActions from "@/shared/hooks/useActions";
import {
    BsFillSignTurnLeftFill,
    BsFillSignTurnRightFill,
} from "react-icons/bs";

interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
    const { nextSlide, prevSlide } = useActions();

    return (
        <div className="mt-10 w-1/2 flex items-center justify-center mx-auto">
            <button onClick={() => prevSlide()}>
                <BsFillSignTurnLeftFill
                    size={40}
                    className="mr-14 transition-colors duration-300 hover:text-red-pink"
                />
            </button>
            <button onClick={() => nextSlide()}>
                <BsFillSignTurnRightFill
                    size={40}
                    className="transition-colors duration-300 hover:text-red-pink"
                />
            </button>
        </div>
    );
};
