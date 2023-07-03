import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
	readonly?: boolean;
	value?: number;
	size?: number;
}

const StarRating = (props: StarRatingProps) => {
	const { readonly, value, size = 28 } = props;

	return (
		<>
			<Rating
				initialValue={value}
				size={size}
				readonly={readonly}
				SVGclassName='inline-block'
			/>
		</>
	);
};

export default StarRating;
