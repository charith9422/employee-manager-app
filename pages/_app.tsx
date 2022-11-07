import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/Widgets/NavBar/NavBar";
import { EmployeeContextProvider } from "../context/EmployeeContext";
import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<EmployeeContextProvider>
				<NavigationBar title="Employee Manager"></NavigationBar>
				<Container>
					<Component {...pageProps} />
				</Container>
			</EmployeeContextProvider>
		</Provider>
	);
}
