import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNotificationAlert } from "../../../helpers/hooks/useNotificationAlert";

type NotificationProps = {
	message: string;
};
const Notification: React.FC<NotificationProps> = ({ message }) => {
	useNotificationAlert(message);
	return (
		<>
			<ToastContainer theme="dark" />
		</>
	);
};

export default Notification;
