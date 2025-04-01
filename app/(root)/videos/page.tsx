import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import Search from '@/components/Search';
import { Suspense } from 'react';
import { getVideoCount } from '@/lib/database';
import VideoContainer from '@/components/VideoContainer';

const LIMIT = 10;

const Videos = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string; page: string }>;
}) => {
	try {
		const params = await searchParams;
		const query = params?.query || '';
		const page = Number(params?.page) || 1;

		const count = await getVideoCount(query);

		return (
			<div className='w-full p-[5%] lg:w-3/4 lg:mx-auto'>
				<Search />

				<Suspense key={query + page} fallback={<p>Loading...</p>}>
					<VideoContainer query={query} page={page} limit={LIMIT} />
				</Suspense>

				<div className='py-8'>
					{count > 0 && (
						<PaginationWithLinks
							totalCount={count}
							pageSize={LIMIT}
							page={Number(page)}
						/>
					)}
				</div>
			</div>
		);
	} catch (error) {
		return <p>Error loading write-ups: {(error as Error).message}</p>;
	}
};

export default Videos;
