import Link from 'next/link';
import React from 'react';
import { writeups } from '@/lib/constants';

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-row'>
			<div
				id='most-recent'
				className='w-[320px] flex flex-col border-2 border-black'
			>
				<h3>Most Recent</h3>
				<ul>
					{writeups.map((writeup) => (
						<li>
							<Link key={writeup.id} href={`./${writeup.id}`}>
								{writeup.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default OverviewLayout;
