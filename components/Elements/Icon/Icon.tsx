type IconProps = {
	icon: React.ReactNode;
};
const Icon: React.FC<IconProps> = ({ icon }) => {
	return (
		<>
			<div data-testid="icon">{icon}</div>
		</>
	);
};

export default Icon;
