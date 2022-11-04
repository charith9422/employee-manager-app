import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();
	useEffect(() => {
		console.log(employees);
	}, [employees]);
	return <></>;
};

export default Index;
