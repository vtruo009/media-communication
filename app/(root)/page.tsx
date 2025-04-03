import { getAllCalls } from '@/lib/database';

const Home = async () => {
	const numCalls = await getAllCalls();

	return (
		<div>
			<div className='flex flex-col h-[20vh] items-center justify-evenly bg-blue-300'>
				<h2 className='text-4xl font-bold'>{numCalls} calls</h2>
				<p>Join us in making a difference</p>
			</div>
			<h1>This is home page</h1>
		</div>
	);
};

export default Home;
