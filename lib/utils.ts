import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { WriteUp } from './mixin';
import { Newspaper } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const transformData = (data: Record<string, any>[]) => {
	const cleanedData: WriteUp[] = [];

	data.forEach((item) => {
		cleanedData.push({
			id: item.id,
			author: item.author,
			published: item.published,
			title: item.title,
			content: item.content,
			categories: item.categories,
			sources: item.sources,
		});
	});

	return cleanedData;
};
