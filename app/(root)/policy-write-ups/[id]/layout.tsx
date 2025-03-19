import Link from 'next/link';
import React from 'react';
import { writeups } from '@/lib/constants';
import WriteupCompact from '@/components/WriteupCompact';
import { ArrowUpRight } from 'lucide-react';

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-row w-full py-20 px-52 gap-x-12'>
			<aside
				id='most-recent'
				className='hidden sm:w-[300px] h-auto sm:flex flex-col shrink-0'
			>
				<h2 className='font-extrabold text-xl py-4 border-b-2 border-gray-200'>
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
			<main>{children}</main>
		</div>
	);
};

export default OverviewLayout;
