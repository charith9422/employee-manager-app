import { useState } from "react";
import { Button } from "react-bootstrap";
import { Grid1x2, Table } from "react-bootstrap-icons";

type DrawerProps = {
	isGrid: boolean;
	setIsGrid: (val: boolean) => void;
};
const Drawer: React.FC<DrawerProps> = ({ isGrid, setIsGrid }) => {
	//const [isGrid, setIsGrid] = useState<boolean>(true);
	return (
		<div>
			<Button onClick={() => setIsGrid(!isGrid)}>
				{isGrid ? <Grid1x2 /> : <Table />}
			</Button>
		</div>
	);
};

export default Drawer;
