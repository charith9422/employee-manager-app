import { Button, Card } from "react-bootstrap";
import { PersonCheck, Trash3, Trash3Fill } from "react-bootstrap-icons";
import { Employee } from "../../../models";
import { List } from "../../Elements/Dropdown/Dropdown";
import Icon from "../../Elements/Icon/Icon";
import styles from "./CardWidget.module.scss";

/* export interface CardData {
	imageUrl: string;
	title: string;
	otherData: List[];
} */
type CardWidgetProps = {
	data: Employee;
	//actionItems: React.ReactNode[];
};
const CardWidget: React.FC<CardWidgetProps> = ({ data }) => {
	return (
		<Card style={{ width: "15rem", marginBottom: "1rem" }}>
			<Card.Img
				variant="top"
				src={
					data.photo
						? data.photo
						: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
				}
			/>
			<Card.Body>
				<Card.Subtitle>{data.first_name + " " + data.last_name}</Card.Subtitle>
				<ul className={styles.cardContent}>
					<li>{data.email}</li>
					<li>{data.number}</li>
					<li>{data.gender}</li>
				</ul>

				<ul className={styles.actionItems}>
					<li className={styles.delete}>
						<Icon
							icon={<Trash3 />}
							onClick={() => console.log("dd")}
							key="1"
						></Icon>
					</li>
					<li className={styles.edit}>
						<Icon
							icon={<PersonCheck />}
							onClick={() => console.log("dd")}
							key="2"
						></Icon>
					</li>
				</ul>
			</Card.Body>
		</Card>
	);
};

export default CardWidget;
