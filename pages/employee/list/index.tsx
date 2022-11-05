import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Trash3 } from "react-bootstrap-icons";
import Button from "../../../components/Elements/Button/Button";
import Drawer from "../../../components/Elements/Drawer/Drawer";
import Dropdown from "../../../components/Elements/Dropdown/Dropdown";
import Icon from "../../../components/Elements/Icon/Icon";
import InputText from "../../../components/Elements/InputText/InputText";
import GridLayout from "../../../components/Layouts/GridLayout/GridLayout";
import TableLayout from "../../../components/Layouts/TableLayout/TableLayout";
import ListAllEmployees from "../../../components/Views/ListAllEmployees/ListAllEmployees";
import CardWidget from "../../../components/Widgets/CardWidget/CardWidget";
import Table from "../../../components/Widgets/Table/Table";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();
	const [isGrid, setIsGrid] = useState<boolean>(true);

	return (
		<>
			<ListAllEmployees />
		</>
	);
};

export default Index;
