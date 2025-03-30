import { getAllWriteups, getFilteredWriteups } from '@/lib/database';
import Writeup from './Writeup';

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
		const filteredWriteups = query
			? await getFilteredWriteups(page, query, limit)
			: await getAllWriteups(page, limit);

		return filteredWriteups.length > 0 ? (
			<ul>
				{filteredWriteups.map((writeup, i) => (
					<li key={`${i}-${writeup.id}`}>
						<Writeup
							id={writeup.id}
							title={writeup.title}
							published={writeup.published}
						/>
					</li>
				))}
			</ul>
		) : (
			<p>No policy write-ups match the search term...</p>
		);
	} catch (error) {
		throw error;
	}
};

export default WriteupsContainer;
