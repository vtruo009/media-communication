import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export const middleware = (req: NextRequest) => {
	const res = NextResponse.next();

	if (!req.cookies.has('user_uuid')) {
		const uuid = uuidv4();
		res.cookies.set('user_uuid', uuid, {
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
		});
	}

	return res;
};

export const config = {
	matcher: '/',
};
