import Link from 'next/link';
import React from 'react';
import { writeups } from '@/lib/constants';
import WriteupCompact from '@/components/WriteupCompact';
import { ArrowUpRight } from 'lucide-react';

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-row w-full py-20 px-52 gap-x-14'>
			<aside
				id='most-recent'
				className='sticky top-0 overflow-y-auto w-1/4 flex flex-col shrink-0 xs:hidden '
			>
				<h2 className='leading-none font-extrabold text-xl pb-3 border-b-4 border-gray-200'>
					Most Recent
				</h2>
				<ul className='mb-4'>
					{writeups.map((writeup) => (
						<li key={writeup.id}>
							<WriteupCompact {...writeup} />
						</li>
					))}
				</ul>
				<Link
					href={'/policy-write-ups'}
					className='inline-flex items-center gap-1'
				>
					<span className='text-xs font-semibold'>VIEW ALL</span>
					<ArrowUpRight className='w-4 h-4' />
				</Link>
			</aside>
			<main className='w-3/4 min-h-screen overflow-y-auto'>{children}</main>
		</div>
	);
};

export default OverviewLayout;
