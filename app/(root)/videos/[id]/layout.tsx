import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getMostRecentVideos } from '@/lib/database';
import { WriteUp } from '@/lib/mixin';
import Video from '@/components/Video';
import Image from 'next/image';

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
				className='w-full h-fit flex flex-col my-8 lg:w-1/4 lg:my-0'
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
				<Link
					target='_blank'
					href='/pusd-trustee-zones.pdf'
					rel='noopener noreferrer'
					className='inline-block border-t-4 pt-6 mt-6'
				>
					<Image
						src='/pusd-trustee-zones.jpg'
						alt='Map of PUSD Trustee Zones'
						width={0}
						height={0}
						sizes='100vw'
						className='w-full h-auto mb-2 object-contain border-2 border-black'
					/>
					<p className='text-base'>Click to view your district zone!</p>
				</Link>
				<p className='text-xs italic text-gray-500'>
					Source:{' '}
					<Link
						href='https://resources.finalsite.net/images/v1707482714/pusdus/peeovbnon0h72varoxpm/pusdboardmembersgeographicsubdistrictmapandexhibit.pdf'
						className='underline text-blue-500'
					>
						Pasadena Unified School District
					</Link>
				</p>
			</aside>
			<main className='w-full min-h-screen overflow-y-auto px-4 lg:w-3/4'>
				{children}
			</main>
		</div>
	);
};

export default OverviewLayout;
