type IconProps = {
	icon: React.ReactNode;
	onClick: () => void;
};
const Icon: React.FC<IconProps> = ({ icon, onClick }) => {
	return (
		<>
			<div onClick={onClick}>{icon}</div>
		</>
	);
};

export default Icon;
