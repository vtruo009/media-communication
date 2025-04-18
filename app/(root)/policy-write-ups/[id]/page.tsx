import BoardMembers from '@/components/BoardMembers';
import {
	getBoardMembers,
	getBoardMemberCount,
	getWriteup,
} from '@/lib/database';
import { BoardMember } from '@/lib/mixin';

const Categories = ({ categories }: { categories: string[] }) => {
	return (
		<>
			{categories.map((category, i) => (
				<span key={category}>
					<span className='text-xs font-bold uppercase text-blue-900 p-2'>
						{category}
					</span>
					{i !== categories.length - 1 && <span>|</span>}
				</span>
			))}
		</>
	);
};

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	try {
		const { id: issueId } = await params;
		if (!issueId) return <h1>Loading...</h1>;

		const writeup = await getWriteup(issueId);
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
						issueId={issueId}
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
