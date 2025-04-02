import BoardMembers from '@/components/BoardMembers';
import Categories from '@/components/Categories';
import {
	getBoardMembers,
	getBoardMemberCount,
	getWriteup,
} from '@/lib/database';
import { BoardMember } from '@/lib/mixin';

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	try {
		const { id } = await params;

		if (!id) return <h1>Loading...</h1>;

		const writeup = await getWriteup(id);
		const boardMemberCount = await getBoardMemberCount();

		return (
			<article>
				<div className='flex justify-between mb-2 text-blue-900 font-semibold'>
					<span>{writeup?.author}</span>
					<span>{writeup?.published.toDateString()}</span>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-2xl text-[#FC2713] border-t-4 border-gray-600 py-6'>
						{writeup?.title}
					</h1>
					<div className='text-center py-4 border-y-2 border-gray-300'>
						<Categories categories={writeup?.categories ?? []} />
					</div>
					<p className='py-4'>{writeup?.content}</p>
					<BoardMembers
						issueId={id}
						boardMemberCount={boardMemberCount}
						boardMembers={(await getBoardMembers()) as BoardMember[]}
					/>
				</div>
			</article>
		);
	} catch (error) {
		return <p>Error loading write-up: {(error as Error).message}</p>;
	}
};

export default Overview;
