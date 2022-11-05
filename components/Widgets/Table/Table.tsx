import Image from "next/image";
import Button from "../../Elements/Button/Button";
import styles from "./Table.module.scss";

type TableProps = {};

const Table: React.FC<TableProps> = () => {
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
					<tr>
						<td>
							<Image
								src="https://randomuser.me/api/portraits/men/92.jpg"
								alt={""}
								width="60"
								height={60}
							></Image>
						</td>
						<td>David</td>
						<td>Miller</td>
						<td>test@gmail.com</td>
						<td>+0712054485</td>
						<td>Male</td>
						<td>
							<Button buttonText="Edit"></Button>
							<Button buttonText="Edit"></Button>
						</td>
					</tr>
					<tr>
						<td>
							<Image
								src="https://randomuser.me/api/portraits/men/92.jpg"
								alt={""}
								width="60"
								height={60}
							></Image>
						</td>
						<td>David</td>
						<td>Miller</td>
						<td>test@gmail.com</td>
						<td>+0712054485</td>
						<td>Male</td>
						<td>
							<Button buttonText="Edit"></Button>
							<Button buttonText="Edit"></Button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Table;
