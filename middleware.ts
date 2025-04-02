import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export const middleware = (req: NextRequest) => {
	const res = NextResponse.next();

	const oneWeek = new Date();
	oneWeek.setDate(oneWeek.getDate() + 7);

	if (!req.cookies.has('user_uuid')) {
		const uuid = uuidv4();
		console.log('set cookies');
		res.cookies.set('user_uuid', uuid, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			expires: oneWeek,
			path: '/',
		});
	}

	return res;
};

export const config = {
	matcher: '/',
};
