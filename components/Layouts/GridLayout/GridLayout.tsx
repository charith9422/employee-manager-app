import { Col, Container, Row } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
import Icon from "../../Elements/Icon/Icon";
import CardWidget from "../../Widgets/CardWidget/CardWidget";

const GridLayout: React.FC = () => {
	const aI = [
		<Icon icon={<Trash3 />} onClick={() => console.log("dd")} key="1"></Icon>,
		<Icon icon={<Trash3 />} onClick={() => console.log("dd")} key="2"></Icon>,
	];

	const data = {
		imageUrl: "https://randomuser.me/api/portraits/men/92.jpg",
		title: "test",
		otherData: [
			{ label: "dd", value: "gdauygu kjhj" },
			{ label: "dd1", value: "gdauygu kjhj" },
		],
	};
	return (
		<>
			<Container>
				<Row>
					<Col>
						<CardWidget actionItems={aI} data={data} />
					</Col>
					<Col>
						<CardWidget actionItems={aI} data={data} />
					</Col>
					<Col>
						<CardWidget actionItems={aI} data={data} />
					</Col>
					<Col>
						<CardWidget actionItems={aI} data={data} />
					</Col>
					<Col>
						<CardWidget actionItems={aI} data={data} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default GridLayout;
