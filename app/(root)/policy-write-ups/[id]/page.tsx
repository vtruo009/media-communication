import Categories from '@/components/Categories';
import ContactTab from '@/components/ContactTab';
import { writeups } from '@/lib/constants';

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	if (!id) return <h1>Loading...</h1>;

	const writeup = writeups.find((writeup) => writeup.id == Number(id));

	return (
		<>
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
				<ContactTab />
			</div>
		</>
	);
};

export default Overview;
