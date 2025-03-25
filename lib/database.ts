'use server';

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

/************************************** Write-ups **************************************/
export const getAllWriteups = async () => {
	try {
		return await sql`SELECT * FROM write_ups`;
	} catch (error) {
		throw new Error(`Error fetching all write-ups: ${error}`);
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

export const getMostRecent = async () => {
	try {
		const result =
			await sql`SELECT * FROM write_ups ORDER BY published LIMIT 4`;

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
