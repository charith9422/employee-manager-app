import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/Widgets/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NavigationBar brandName="Employee Manager"></NavigationBar>
			<Component {...pageProps} />
		</Provider>
	);
}
