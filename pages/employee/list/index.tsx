import { NextPage } from "next";
import { useRouter } from "next/router";
import ListAllEmployees from "../../../components/Views/ListAllEmployees/ListAllEmployees";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();

	const onClickAdd = () => {
		router.push("/employee/add");
	};

	return (
		<>
			{employees && (
				<ListAllEmployees addEmployee={onClickAdd} data={employees} />
			)}
		</>
	);
};

export default Index;
