import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../../components/Elements/Button/Button";
import Drawer from "../../../components/Elements/Drawer/Drawer";
import Dropdown from "../../../components/Elements/Dropdown/Dropdown";
import InputText from "../../../components/Elements/InputText/InputText";
import CardWidget from "../../../components/Widgets/CardWidget/CardWidget";
import Table from "../../../components/Widgets/Table/Table";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();
	const [isGrid, setIsGrid] = useState<boolean>(true);

	return (
		<>
			<Button buttonText="Add Employee"></Button>
			<Drawer isGrid={isGrid} setIsGrid={() => setIsGrid(!isGrid)} />
			<CardWidget />

			<Dropdown
				label="Gender"
				options={[
					{ label: "Male", value: "M" },
					{ label: "Female", value: "F" },
				]}
			/>
			<InputText textInput="te" />
			<Table />
		</>
	);
};

export default Index;
