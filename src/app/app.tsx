import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./StoreProvider/store";

export function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
