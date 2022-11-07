import { createContext, ReactNode, useState } from "react";
import { EmployeePayload } from "../models";

type NotificationProviderProps = {
	children: ReactNode;
};
export interface INotification {
	notificationMessage: string;
	setNotificationMessage(v: string): void;
}
export const NotificationContext = createContext<INotification>(
	null as unknown as INotification
);

export const NotificationContextProvider = ({
	children,
}: NotificationProviderProps) => {
	const [notificationMessage, setNotificationMessage] = useState<string>("");

	const value = {
		notificationMessage,
		setNotificationMessage,
	} as INotification;

	return (
		<NotificationContext.Provider value={value}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContext;
