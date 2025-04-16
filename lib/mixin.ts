export interface WriteUp {
	id: string;
	author: string;
	published: Date;
	title: string;
	content: string;
	categories: string[];
	sources: string[];
	thumbnail?: string;
	icon?: React.ReactElement;
}

export interface BoardMember {
	id: number;
	name: string;
	phone: string;
	email: string;
	district: number;
	image_url: string;
}

export enum CallMethod {
	PHONE = 'phone',
	EMAIL = 'email',
}
