import { Button, Card } from "react-bootstrap";
import styles from "./CardWidget.module.scss";

type CardWidgetProps = {};
const CardWidget: React.FC<CardWidgetProps> = () => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://randomuser.me/api/portraits/men/92.jpg"
			/>
			<Card.Body>
				<Card.Subtitle>David Miller</Card.Subtitle>
				<ul className={styles.cardContent}>
					<li>test@gmail.com</li>
					<li>+94712021552</li>
					<li>Male</li>
				</ul>
			</Card.Body>
		</Card>
	);
};

export default CardWidget;
