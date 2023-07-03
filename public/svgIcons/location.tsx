interface IconProps {
	width?: number;
	height?: number;
	fill?: string;
	className?: string;
}

const LocationIcon = ({
	width = 16,
	height = 16,
	fill = '#000000',
	className,
}: IconProps) => {
	return (
		<svg
			fill={fill}
			width={width}
			height={height}
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<title />
			<g data-name='Layer 11' id='Layer_11'>
				<path d='M16,17a5,5,0,1,0-5-5A5,5,0,0,0,16,17Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,16,9Z' />
				<path d='M29.89,28.55l-4-8A1,1,0,0,0,25,20H23.05C25,16.49,26,13.8,26,12A10,10,0,0,0,6,12C6,13.8,7,16.49,9,20H7a1,1,0,0,0-.89.55l-4,8A1,1,0,0,0,3,30H29a1,1,0,0,0,.89-1.45ZM16,4a8,8,0,0,1,8,8c0,1.63-1.26,4.65-3.54,8.49l-.57.94-.15.25-.44.7c0,.08-.09.15-.14.23l-.56.87,0,.06-.5.76-.16.25-.38.55-.15.23c-.15.23-.3.44-.45.65l-.17.25-.25.35-.2.3-.17.23L16,27.3l-.13-.19-.17-.24-.2-.28q-.13-.18-.27-.39L15.08,26l-.46-.67-.13-.2-.39-.58-.16-.23-.51-.79,0,0-.56-.87-.15-.24-.42-.67c-.06-.1-.12-.19-.17-.29l-.5-.82-.06-.1h0C9.26,16.65,8,13.63,8,12A8,8,0,0,1,16,4ZM4.62,28l3-6h2.49l.09.15.3.48.21.35c.12.18.23.36.34.54l.16.26.51.79h0l.49.74a.91.91,0,0,0,.11.16c.12.2.25.39.37.57l.12.17.35.51.1.16.32.45.12.17.25.37.09.12ZM18,28l.09-.13c.08-.11.17-.23.25-.36l.12-.17.31-.45.11-.16c.12-.16.23-.33.35-.5L19.3,26q.18-.25.36-.54l.12-.18.45-.67.05-.09c.17-.25.33-.51.5-.77l.21-.33c.09-.16.19-.31.29-.47l.25-.4.25-.42.11-.17h2.49l3,6Z' />
			</g>
		</svg>
	);
};

export default LocationIcon;
