import Link from 'next/link';
import React from 'react';
import WriteupCompact from '@/components/WriteupCompact';
import { ArrowUpRight } from 'lucide-react';
import { getMostRecent } from '@/lib/database';
import { transformData } from '@/lib/utils';

const OverviewLayout = async ({ children }: { children: React.ReactNode }) => {
	const data = await getMostRecent();
	const mostRecentWriteups = transformData(data);

	return (
		<div className='flex flex-row w-full py-[5%] px-[10%] gap-x-14'>
			<aside
				id='most-recent'
				className='w-full md:w-1/4 flex flex-col shrink-0 float-right'
			>
				<h2 className='leading-none font-extrabold text-xl pb-3 border-b-4 border-gray-200'>
					Most Recent
				</h2>
				{mostRecentWriteups.length > 0 ? (
					<ul className='mb-4'>
						{mostRecentWriteups.map((writeup) => (
							<li key={writeup.id}>
								<WriteupCompact {...writeup} />
							</li>
						))}
					</ul>
				) : (
					<p>No new write-ups available</p>
				)}
				<Link
					href={'/policy-write-ups'}
					className='inline-flex items-center gap-1'
				>
					<span className='text-xs font-semibold'>VIEW ALL</span>
					<ArrowUpRight className='w-4 h-4' />
				</Link>
			</aside>
			<main className='w-full md:w-3/4 min-h-screen overflow-y-auto float-right'>
				{children}
			</main>
		</div>
	);
};

export default OverviewLayout;
