import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import Writeup from '@/components/Writeup';
import { getWriteupCount, getWriteups } from '@/lib/database';

const PolicyWriteups = async ({
	searchParams,
}: {
	searchParams: Promise<{ page: string }>;
}) => {
	try {
		const { page } = await searchParams;
		const size = 10;

		const count = await getWriteupCount();
		const writeups = await getWriteups(Number(page), size);

		return (
			<div className='w-1/2 mx-auto'>
				{writeups.map((writeup) => (
					<Writeup
						key={writeup.id}
						id={writeup.id}
						title={writeup.title}
						published={writeup.published}
					/>
				))}
				<div className='py-8'>
					<PaginationWithLinks
						totalCount={count}
						pageSize={size}
						page={Number(page)}
					/>
				</div>
			</div>
		);
	} catch (error) {
		return <p>Error loading write-ups: {(error as Error).message}</p>;
	}
};

export default PolicyWriteups;
