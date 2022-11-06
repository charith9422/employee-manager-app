type IconProps = {
	icon: React.ReactNode;
	//onClick: () => void;
};
const Icon: React.FC<IconProps> = ({ icon }) => {
	return (
		<>
			<div>{icon}</div>
		</>
	);
};

export default Icon;
