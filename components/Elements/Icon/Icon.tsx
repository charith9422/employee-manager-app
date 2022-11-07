type IconProps = {
	icon: React.ReactNode;
};
const Icon: React.FC<IconProps> = ({ icon }) => {
	return (
		<>
			<div>{icon}</div>
		</>
	);
};

export default Icon;
