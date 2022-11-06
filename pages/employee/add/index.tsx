import { NextPage } from "next";
import { useRouter } from "next/router";
import AddEmployee from "../../../components/Views/AddEmployee/AddEmployee";

const Index: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<AddEmployee />
		</>
	);
};

export default Index;
