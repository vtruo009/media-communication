'use server';

import { neon } from '@neondatabase/serverless';
import { WriteUp } from './mixin';

const sql = neon(process.env.DATABASE_URL || '');

export const getWriteups = async (page: number, size: number) => {
	try {
		return (await sql`SELECT id, title, published FROM write_ups ORDER BY published LIMIT ${size} OFFSET ${
			(page - 1) * size
		} ROWS`) as WriteUp[];
	} catch (error) {
		throw new Error(`Error fetching all write-ups: ${error}`);
	}
};

export const getWriteupCount = async () => {
	try {
		const result = await sql`SELECT COUNT(*) FROM write_ups`;
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
		const result =
			await sql`SELECT * FROM write_ups WHERE id != ${idToFilter} ORDER BY published LIMIT 4`;

		return result;
	} catch (error) {
		throw new Error(`Error fetching most recent write-ups: ${error}`);
	}
};

/************************************** Users **************************************/
export const addUser = async (email: string) => {
	try {
		return await sql`INSERT INTO users (email) VALUES (${email})`;
	} catch (error) {
		throw new Error(`Error adding user email ${email} to database: ${error}`);
	}
};
