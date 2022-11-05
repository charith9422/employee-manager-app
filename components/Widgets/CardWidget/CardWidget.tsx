import { Button, Card } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
import { List } from "../../Elements/Dropdown/Dropdown";
import Icon from "../../Elements/Icon/Icon";
import styles from "./CardWidget.module.scss";

export interface CardData {
	imageUrl: string;
	title: string;
	otherData: List[];
}
type CardWidgetProps = {
	data: CardData;
	actionItems: React.ReactNode[];
};
const CardWidget: React.FC<CardWidgetProps> = ({ data, actionItems }) => {
	return (
		<Card>
			<Card.Img variant="top" src={data.imageUrl} />
			<Card.Body>
				<Card.Subtitle>{data.title}</Card.Subtitle>
				<ul className={styles.cardContent}>
					{data.otherData.map((d) => (
						<li key={d.label}>{d.value}</li>
					))}
				</ul>

				<ul className={styles.actionItems}>
					{actionItems.map((d, i) => (
						<li key={i}>{d}</li>
					))}
				</ul>
			</Card.Body>
		</Card>
	);
};

export default CardWidget;
