import Image from "next/image";
import { Trash3 } from "react-bootstrap-icons";
import { Employee } from "../../../models";
import Button from "../../Elements/Button/Button";
import Icon from "../../Elements/Icon/Icon";
import styles from "./Table.module.scss";

type TableProps = {
	data: Employee[];
};

const Table: React.FC<TableProps> = ({ data }) => {
	return (
		<>
			<table className={styles.tableWrapper}>
				<thead>
					<tr>
						<th>Image</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Gender</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((d, i) => (
						<tr key={i}>
							<td>
								<Image
									src={d.photo ? d.photo : ""}
									alt={""}
									width="60"
									height={60}
								></Image>
							</td>
							<td>{d.first_name}</td>
							<td>{d.last_name}</td>
							<td>{d.email}</td>
							<td>{d.number}</td>
							<td>{d.gender}</td>
							<td>
								<Button buttonText="Edit" variant="secondary"></Button>
								<Button buttonText="Delete" variant="danger"></Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
