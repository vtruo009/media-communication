import TakeAction from '@/components/TakeAction';

import Poll from '@/components/Poll';

const Home = () => {
	return (
		<div>
			<h1>This is home page</h1>
			<TakeAction message="Let's make a difference in education." />
			{/* <div data-tf-live='01JS67N8BTHVFCSDVBDRWHD39Y' data-tf-loading></div>
			<script src='//embed.typeform.com/next/embed.js'></script> */}
			<Poll />
		</div>
	);
};

export default Home;
