import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/slices/employeeSlice";
import { AppDispatch, RootState } from "../../store/store";

export const useAllEmployees = () => {
	const dispatch = useDispatch<AppDispatch>();
	const employees = useSelector(
		(state: RootState) => state.employee.response?.employeeData
	);
	const loading = useSelector((state: RootState) => state.employee.loading);
	const error = useSelector((state: RootState) => state.employee?.error);

	useEffect(() => {
		dispatch(fetchEmployees());
	}, [dispatch]);

	return { employees, loading, error };
};
