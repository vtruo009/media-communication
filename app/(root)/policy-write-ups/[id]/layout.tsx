import Link from 'next/link';
import React from 'react';
import Writeup from '@/components/Writeup';
import { ArrowUpRight } from 'lucide-react';
import { getMostRecent } from '@/lib/database';
import { WriteUp } from '@/lib/mixin';

const OverviewLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ id: string }>;
}) => {
	const { id: currentWriteupId } = await params;
	const mostRecentWriteups = (await getMostRecent(
		currentWriteupId
	)) as WriteUp[];

	return (
		<div className='flex flex-row w-full py-[5%] px-[10%] gap-x-14'>
			<aside
				id='most-recent'
				className='w-full md:w-1/4 flex flex-col shrink-0 float-left'
			>
				<h2 className='leading-none font-extrabold text-xl pb-3 border-b-4 border-gray-200'>
					Most Recent
				</h2>
				{mostRecentWriteups.length > 0 ? (
					<ul className='mb-4'>
						{mostRecentWriteups.map((writeup) => (
							<li key={writeup.id}>
								<Writeup
									compact
									id={writeup.id}
									title={writeup.title}
									published={writeup.published}
								/>
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
