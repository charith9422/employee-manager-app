import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeeState } from "../../models";
import { axiosClient } from "../../fetchers/employee.fetcher";
import EmployeeService from "../../helpers/services/employee";

const initialState: EmployeeState = {
	response: { employeeData: [], message: "" },
	loading: false,
	error: "",
};

export const fetchEmployees = createAsyncThunk(
	"employee/fetchEmployees",
	async () => {
		return await EmployeeService.getAllEmployees();
	}
);

export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchEmployees.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchEmployees.fulfilled, (state, action) => {
			state.loading = false;
			state.response = action.payload;
			state.error = "";
		});
		builder.addCase(fetchEmployees.rejected, (state, action) => {
			state.loading = false;
			state.response = { employeeData: [], message: "" };
			state.error = action.error.message
				? action.error.message
				: "Error Occurred!";
		});
	},
});

export default employeeSlice.reducer;
