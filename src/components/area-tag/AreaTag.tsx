import React from 'react';
import { AreaEnum } from '@/types/postTypes';
import { getAreaName } from '@/helpers/getAreaName';

interface AreaTagProps {
	areaName: AreaEnum;
	className?: string;
}

const AreaColor = {
	NORTH_AMERICA: 'bg-secondary-pastel-pink',
	SOUTH_AMERICA: 'bg-secondary-pastel-green',
	ASIA: 'bg-secondary-pastel-blue',
	OCEANIA: 'bg-secondary-pastel-purple',
	EUROPE: 'bg-secondary-pastel-orange',
	AFRICA: 'bg-secondary-pastel-yellow',
	OTHER: 'bg-secondary-pastel-gray',
};

const AreaTag = ({ areaName, className }: AreaTagProps) => {
	return (
		<>
			<span
				className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${AreaColor[areaName]} ${className}`}
			>
				#{getAreaName(areaName)}
			</span>
		</>
	);
};

export default AreaTag;
