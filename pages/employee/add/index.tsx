import { NextPage } from "next";
import { useRouter } from "next/router";
import AddEmployee from "../../../components/Views/AddEmployee/AddEmployee";

const Index: NextPage = () => {
	const router = useRouter();
	const addEmployee = ({ values }: any) => {
		console.log("s", values);
		router.push("/employee/list");
	};
	return (
		<>
			<AddEmployee addEmployee={addEmployee} />
		</>
	);
};

export default Index;
