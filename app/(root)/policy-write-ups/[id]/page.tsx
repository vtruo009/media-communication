import { writeups } from '@/lib/constants';

// TODO: Create interface.ts
interface WriteupProps {
	id: string | number;
	published: Date;
	thumbnail: string;
	icon: React.ReactElement;
	title: string;
	shortDesc: string;
}

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	if (!id) return <h1>Loading...</h1>;

	const writeup = writeups.find((writeup) => writeup.id == Number(id));

	return (
		<div className='flex flex-col'>
			<h1>{writeup?.title}</h1>
		</div>
	);
};

export default Overview;
