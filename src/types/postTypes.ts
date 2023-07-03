export interface Post {
	_id: string;
	title: string;
	description: string;
	area: AreaEnum;
	country: string;
	city: string;
	rating?: number;
	postedUser: string;
	userName: string;
	fileIdentifier?: string;
	imageUrl?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface CreatePostInput {
	title: string;
	description: string;
	country: string;
	city: string;
	rating: number;
	area: AreaEnum;
	postedUser: string;
	fileIdentifier: string;
}

export interface EditPostInput {
	_id: string;
	title?: string;
	description?: string;
	country?: string;
	city?: string;
	rating?: number;
	area?: AreaEnum;
}

export enum AreaEnum {
	NORTH_AMERICA = 'NORTH_AMERICA',
	SOUTH_AMERICA = 'SOUTH_AMERICA',
	ASIA = 'ASIA',
	OCEANIA = 'OCEANIA',
	EUROPE = 'EUROPE',
	AFRICA = 'AFRICA',
	OTHER = 'OTHER',
}

export interface PostFormValue {
	title: string;
	country: string;
	city: string;
	area: string;
	rate: number;
	description: string;
}
