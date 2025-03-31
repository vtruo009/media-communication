'use server';

import { neon } from '@neondatabase/serverless';
import { WriteUp } from './mixin';

const sql = neon(process.env.DATABASE_URL || '');

/**************************** WRITE-UPS ****************************/
export const getAllWriteups = async (page: number, size: number) => {
	try {
		return (await sql`SELECT id, title, published FROM write_ups ORDER BY published LIMIT ${size} OFFSET ${
			(page - 1) * size
		} ROWS`) as WriteUp[];
	} catch (error) {
		throw new Error(`Error fetching all write-ups: ${error}`);
	}
};

export const getFilteredWriteups = async (
	page: number,
	query: string,
	limit: number
) => {
	try {
		return await sql`SELECT distinct title, published, categories
			FROM write_ups, lateral unnest(categories) AS category
			WHERE (category LIKE ${`%${query}%`} OR title LIKE ${`%${query}%`})
			ORDER BY published
			LIMIT ${limit} OFFSET ${(page - 1) * limit}`;
	} catch (error) {
		throw new Error(`Error fetching filtered write-ups: ${error}`);
	}
};

export const getWriteupCount = async (query: string) => {
	try {
		const result =
			await sql`SELECT COUNT(*) FROM write_ups, lateral unnest(categories) AS category
		WHERE (category LIKE ${`%${query}%`} OR title LIKE ${`%${query}%`})`;
		return parseInt(result[0].count);
	} catch (error) {
		throw new Error(`Error getting total count of write_ups table: ${error}`);
	}
};

export const getWriteup = async (id: string) => {
	try {
		const result = await sql`SELECT * FROM write_ups WHERE id=${id}`;
		if (result.length > 1)
			throw new Error('There are more than one write-up returned for this id');

		return result[0];
	} catch (error) {
		throw new Error(`Error fetching write-up with id ${id}: ${error}`);
	}
};

export const getMostRecent = async (idToFilter: string) => {
	try {
		return await sql`SELECT * FROM write_ups WHERE id != ${idToFilter} ORDER BY published LIMIT 4`;
	} catch (error) {
		throw new Error(`Error fetching most recent write-ups: ${error}`);
	}
};

/**************************** BOARD MEMBERS ****************************/
export const getBoardMembers = async () => {
	try {
		return await sql`SELECT * FROM board_members ORDER BY district`;
	} catch (error) {
		throw new Error(`Error fetching board members: ${error}`);
	}
};

export const getBoardMemberCount = async () => {
	try {
		const result = await sql`SELECT COUNT(*) FROM board_members`;
		return Number(result[0].count);
	} catch (error) {
		throw new Error(`Error fetching board member count: ${error}`);
	}
};
