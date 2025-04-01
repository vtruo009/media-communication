import { getAllVideos, getFilteredVideos } from '@/lib/database';
import Video from './Video';

const WriteupsContainer = async ({
	query,
	page,
	limit,
}: {
	query: string;
	page: number;
	limit: number;
}) => {
	try {
		const filteredVideos = query
			? await getFilteredVideos(page, query, limit)
			: await getAllVideos(page, limit);

		return filteredVideos.length > 0 ? (
			<ul>
				{filteredVideos.map((writeup, i) => (
					<li key={`${i}-${writeup.id}`}>
						<Video
							id={writeup.id}
							title={writeup.title}
							published={writeup.published}
						/>
					</li>
				))}
			</ul>
		) : (
			<p>Cannot find video matching &apos;{query}&apos;...</p>
		);
	} catch (error) {
		throw error;
	}
};

export default WriteupsContainer;
