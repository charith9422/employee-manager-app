import { NextPage } from "next";
import EditEmployee from "../../../components/Views/EditEmployee/EditEmployee";

const Index: NextPage = () => {
	return (
		<>
			<EditEmployee operation={"EDIT"} />
		</>
	);
};

export default Index;
