import BoardMembers from '@/components/BoardMembers';
import Categories from '@/components/Categories';
import { getBoardMembers, getBoardMemberCount, getVideo } from '@/lib/database';
import { BoardMember } from '@/lib/mixin';

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	try {
		const { id: issueId } = await params;
		if (!issueId) return <h1>Loading...</h1>;

		const video = await getVideo(issueId);
		const boardMemberCount = await getBoardMemberCount();

		return (
			<article>
				<div className='flex justify-between mb-2 text-blue-900 font-semibold'>
					<span>{video?.author}</span>
					<span>{video?.published.toDateString()}</span>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-2xl text-[#FC2713] border-t-4 border-gray-600 py-6'>
						{video?.title}
					</h1>
					<div className='text-center py-4 border-y-2 border-gray-300'>
						<Categories categories={video?.categories ?? []} />
					</div>
					<p className='py-4'>{video?.content}</p>
					<BoardMembers
						issueId={issueId}
						boardMemberCount={boardMemberCount}
						boardMembers={(await getBoardMembers()) as BoardMember[]}
					/>
				</div>
			</article>
		);
	} catch (error) {
		return <p>Error loading video: {(error as Error).message}</p>;
	}
};

export default Overview;
