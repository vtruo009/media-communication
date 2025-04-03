import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getMostRecentVideos } from '@/lib/database';
import { WriteUp } from '@/lib/mixin';
import Video from '@/components/Video';

const OverviewLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ id: string }>;
}) => {
	const { id: currentVideoId } = await params;
	const mostRecentVideos = (await getMostRecentVideos(
		currentVideoId
	)) as WriteUp[];

	return (
		<div className='w-full flex flex-col-reverse lg:flex-row p-[5%] gap-x-10'>
			<aside
				id='most-recent'
				className='w-full flex flex-col my-8 lg:w-1/4 lg:my-0'
			>
				<h2 className='leading-none font-extrabold text-xl pb-3 border-b-4 border-gray-200'>
					Most Recent
				</h2>
				{mostRecentVideos.length > 0 ? (
					<ul className='mb-4'>
						{mostRecentVideos.map((video) => (
							<li key={video.id}>
								<Video
									compact
									id={video.id}
									title={video.title}
									published={video.published}
								/>
							</li>
						))}
					</ul>
				) : (
					<p>No new videos available</p>
				)}
				<Link href={'/videos'} className='inline-flex items-center gap-1'>
					<span className='text-xs font-semibold'>VIEW ALL</span>
					<ArrowUpRight className='w-4 h-4' />
				</Link>
			</aside>
			<main className='w-full min-h-screen overflow-y-auto px-4 lg:w-3/4'>
				{children}
			</main>
		</div>
	);
};

export default OverviewLayout;
