export const getAreaName = (areaTag: string | undefined) => {
	switch (areaTag) {
		case 'NORTH_AMERICA':
			return 'North.A';
		case 'SOUTH_AMERICA':
			return 'South.A';
		case 'ASIA':
			return 'Asia';
		case 'OCEANIA':
			return 'Oceania';
		case 'EUROPE':
			return 'Europe';
		case 'AFRICA':
			return 'Africa';
		case 'OTHER':
			return 'Other';
		default:
			return '-';
	}
};
