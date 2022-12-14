import Image from "next/image";
import { Trash3 } from "react-bootstrap-icons";
import { Employee, EmployeePayload } from "../../../models";
import Button from "../../Elements/Button/Button";
import styles from "./Table.module.scss";

type TableProps = {
	data: Employee[];
	onEdit: (operation: string, employee: EmployeePayload) => void;
	onDelete: (id: string) => void;
};

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
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
									src={
										d.photo
											? d.photo
											: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
									}
									alt={""}
									width="60"
									height={60}
								></Image>
							</td>
							<td>{d.first_name}</td>
							<td>{d.last_name}</td>
							<td>{d.email}</td>
							<td>{d.number}</td>
							<td>{d.gender === "M" ? "Male" : "Female"}</td>
							<td>
								<Button
									buttonText="Edit"
									variant="secondary"
									onBtnClick={() => onEdit("EDIT", d)}
								></Button>
								<Button
									icon={<Trash3 />}
									variant="danger"
									onBtnClick={() => onDelete(d._id)}
								></Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
