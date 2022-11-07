import { useEffect } from "react";
import { toast } from "react-toastify";

export const useNotificationAlert = (message: string) => {
	useEffect(() => {
		toast(message);
	}, [message]);

	return { isTriggered: true };
};
