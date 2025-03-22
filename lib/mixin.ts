export interface WriteUp {
	id: string | number;
	author: string;
	published: Date;
	title: string;
	content: string;
	categories: string[];
	sources: string[];
	thumbnail: string;
	icon?: React.ReactElement;
}

export interface Contact {
	id: string;
	name: string;
	phone: string;
	email: string;
	district: string;
	image: string;
}
