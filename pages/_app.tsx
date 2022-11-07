import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/Widgets/NavBar/NavBar";
import { EmployeeContextProvider } from "../context/EmployeeContext";
import { Container } from "react-bootstrap";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../i18n/config";
import { NotificationContextProvider } from "../context/NotificationContext";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<NotificationContextProvider>
					<EmployeeContextProvider>
						<NavigationBar title="Employee Manager"></NavigationBar>
						<Container>
							<Component {...pageProps} />
						</Container>
					</EmployeeContextProvider>
				</NotificationContextProvider>
			</I18nextProvider>
		</Provider>
	);
}
