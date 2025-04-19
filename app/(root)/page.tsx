import Stats from '@/components/Stats';
import { getCallStats } from '@/lib/database';
import TakeAction from '@/components/TakeAction';

const Home = async () => {
	const { total, successes, voicemails, emails } = await getCallStats();
	const stats = {
		successes,
		voicemails,
		emails,
	};

	return (
		<>
			<h1>This is home page</h1>
			<div className='w-full h-[20vh] flex justify-evenly items-center'>
				<Stats label='total calls' value={total} className='bg-orange-400' />
				{Object.keys(stats).map((key) => (
					<Stats
						key={key}
						label={key}
						value={stats[key as keyof typeof stats]}
					/>
				))}
			</div>
			<TakeAction message="Let's make a difference in education." />
		</>
	);
};

export default Home;
