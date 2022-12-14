import { Button } from "react-bootstrap";
import { Grid1x2, Table } from "react-bootstrap-icons";
import { fullyRoundedBtnStyle } from "../../../helpers/common";

type DrawerProps = {
	isGrid: boolean;
	setIsGrid: (val: boolean) => void;
};
const Drawer: React.FC<DrawerProps> = ({ isGrid, setIsGrid }) => {
	return (
		<div data-testid="drawer-wrapper">
			<Button onClick={() => setIsGrid(!isGrid)} style={fullyRoundedBtnStyle}>
				{isGrid ? <Grid1x2 /> : <Table />}
			</Button>
		</div>
	);
};

export default Drawer;
