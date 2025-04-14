'use server';

import { neon } from '@neondatabase/serverless';
import { WriteUp } from './mixin';

const sql = neon(process.env.DATABASE_URL || '');

/**************************** WRITE-UPS ****************************/
export const getAllWriteups = async (page: number, size: number) => {
	try {
		return (await sql`
			SELECT id, title, published
			FROM write_ups
			ORDER BY published
			LIMIT ${size} OFFSET ${(page - 1) * size} ROWS
		`) as WriteUp[];
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
		return await sql`
			SELECT distinct title, published, categories
			FROM write_ups, lateral unnest(categories) AS category
			WHERE (category LIKE '%' || ${query} || '%' OR title LIKE '%' || ${query} || '%')
			ORDER BY published
			LIMIT ${limit} OFFSET ${(page - 1) * limit}
		`;
	} catch (error) {
		throw new Error(`Error fetching filtered write-ups: ${error}`);
	}
};

export const getWriteupCount = async (query: string) => {
	try {
		const result = await sql`
				SELECT COUNT(DISTINCT write_ups.id)
				FROM write_ups, lateral unnest(categories) AS category
				WHERE (category LIKE '%' || ${query} || '%' OR title LIKE '%' || ${query} || '%')
			`;
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

export const getMostRecentWriteups = async (idToFilter: string) => {
	try {
		return await sql`
			SELECT * FROM write_ups WHERE id != ${idToFilter} ORDER BY published LIMIT 4
		`;
	} catch (error) {
		throw new Error(`Error fetching most recent write-ups: ${error}`);
	}
};

/**************************** VIDEOS ****************************/
export const getAllVideos = async (page: number, size: number) => {
	try {
		return (await sql`SELECT id, title, published FROM videos ORDER BY published LIMIT ${size} OFFSET ${
			(page - 1) * size
		} ROWS`) as WriteUp[];
	} catch (error) {
		throw new Error(`Error fetching all videos: ${error}`);
	}
};

export const getFilteredVideos = async (
	page: number,
	query: string,
	limit: number
) => {
	try {
		return await sql`SELECT distinct title, published, categories
			FROM videos, lateral unnest(categories) AS category
			WHERE (category LIKE '%' || ${query} || '%' OR title LIKE '%' || ${query} || '%')
			ORDER BY published
			LIMIT ${limit} OFFSET ${(page - 1) * limit}`;
	} catch (error) {
		throw new Error(`Error fetching filtered videos: ${error}`);
	}
};

export const getVideo = async (id: string) => {
	try {
		const result = await sql`SELECT * FROM videos WHERE id=${id}`;
		if (result.length > 1)
			throw new Error('There are more than one video returned for this id');

		return result[0];
	} catch (error) {
		throw new Error(`Error fetching video with id ${id}: ${error}`);
	}
};

export const getMostRecentVideos = async (idToFilter: string) => {
	try {
		return await sql`SELECT * FROM videos WHERE id != ${idToFilter} ORDER BY published LIMIT 4`;
	} catch (error) {
		throw new Error(`Error fetching most recent videos: ${error}`);
	}
};

export const getVideoCount = async (query: string) => {
	try {
		const result =
			await sql`SELECT COUNT(DISTINCT videos.id) FROM videos, lateral unnest(categories) AS category
		WHERE (category LIKE '%' || ${query} || '%' OR title LIKE '%' || ${query} || '%')`;
		return Number(result[0].count);
	} catch (error) {
		throw new Error(`Error fetching total count of videos table: ${error}`);
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

/************************************** Users **************************************/
export const postUser = async (id: string) => {
	try {
		return await sql`INSERT INTO users (user_id) SELECT ${id}
						WHERE NOT EXISTS (SELECT 1 FROM users WHERE users.user_id = ${id})`;
	} catch (error) {
		throw new Error(`Error adding user ${id} to database: ${error}`);
	}
};

/************************************** Calls **************************************/
export const postCall = async (
	caller_id: string,
	receiver: string,
	via: string,
	id: string
) => {
	try {
		const result = await sql`
				INSERT INTO calls (created, caller_id, receiver, via, issue_id)
				VALUES (${new Date()}, ${caller_id}, ${receiver}, ${via}, ${id})
				RETURNING call_id
			`;

		return result[0].call_id;
	} catch (error) {
		throw new Error(
			`Error posting call record to calls table for caller ${caller_id} to ${receiver} via ${via}: ${error}`
		);
	}
};

export const putCall = async (callId: string, outcome: string) => {
	try {
		return await sql`
			UPDATE calls SET outcome = ${outcome} WHERE call_id = ${callId}
		`;
	} catch (error) {
		throw new Error(
			`Error updating call record:
				call_id: ${callId}
				outcome: ${outcome}
				: ${error}`
		);
	}
};

export const getAllCalls = async () => {
	try {
		const result = await sql`
			SELECT COUNT(*) FROM calls
			WHERE outcome IS NOT NULL
		`;

		return Number(result[0].count);
	} catch (error) {
		throw new Error(`Error getting all calls: ${error}`);
	}
};

export const getCallsForUser = async (userId: string) => {
	try {
		return await sql`
			SELECT * FROM (
				SELECT call_id, caller_id, issue_id, receiver, outcome, via, write_ups.id as write_up_id, videos.id as video_id FROM calls
				LEFT JOIN write_ups
				ON issue_id = write_ups.id
				LEFT JOIN videos
				ON issue_id = videos.id
			) T WHERE caller_id = ${userId}
		`;
	} catch (error) {
		throw new Error(
			`Error getting the calls for user with uuid ${userId}: ${error}`
		);
	}
};

export const getCallStats = async () => {
	try {
		const result = await sql`
			SELECT
				COUNT(*) AS total,
				SUM(CASE WHEN outcome = 'success' THEN 1 ELSE 0 END) AS successes,
				SUM(CASE WHEN outcome = 'voicemail' THEN 1 ELSE 0 END) AS voicemails,
				SUM(CASE WHEN outcome = 'email' THEN 1 ELSE 0 END) AS emails
			FROM calls;
		`;

		return { ...result[0] };
	} catch (error) {
		throw new Error(`Error getting the stats for calls: ${error}`);
	}
};
