import { writeups } from '@/lib/constants';

// TODO: Create interface.ts
interface WriteupProps {
	id: string | number;
	published: Date;
	thumbnail: string;
	icon: React.ReactElement;
	title: string;
	author: string;
	overview: string;
	categories: string[];
}

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	if (!id) return <h1>Loading...</h1>;

	const writeup = writeups.find((writeup) => writeup.id == Number(id));

	return (
		<div className=''>
			<div className='flex justify-between mb-2'>
				<span>{writeup?.author}</span>
				<span>{writeup?.published.toDateString()}</span>
			</div>
			<div className='flex flex-col'>
				<h1 className='text-2xl text-[#FC2713] font-semibold border-t-4 border-gray-600 py-6'>
					{writeup?.title}
				</h1>
				<div className='text-center py-4 border-y-2 border-gray-300'>
					{writeup?.categories.map((category) => (
						// <Category category={category}/>
						<span key={category} className='inline-block gap-2'>
							{category} |
						</span>
					))}
				</div>
				<p className='py-4'>{writeup?.bulletOverview}</p>
				{/* contact component */}
			</div>
		</div>
	);
};

export default Overview;
