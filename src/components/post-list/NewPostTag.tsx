interface NewPostTagProps {
	className?: string;
}

const NewPostTag = ({ className }: NewPostTagProps) => {
	return (
		<>
			<div
				className={`inline-block bg-black/50 px-2 font-titillium text-md text-secondary-light-gray ${className}`}
			>
				New!
			</div>
		</>
	);
};

export default NewPostTag;
