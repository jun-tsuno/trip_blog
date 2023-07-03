import BeatLoader from 'react-spinners/BeatLoader';

interface SpinnerProps {
	color?: string;
	size?: number;
	className?: string;
}

const Spinner = ({ color = '#A0D8E9', size = 15, className }: SpinnerProps) => {
	return (
		<>
			<BeatLoader color={color} size={size} className={className} />
		</>
	);
};

export default Spinner;
