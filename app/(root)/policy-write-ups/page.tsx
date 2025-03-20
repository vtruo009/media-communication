import Writeup from '@/components/Writeup';
import { writeups } from '@/lib/constants';

const PolicyWriteups = () => {
	return (
		<div className='py-12 px-52'>
			{writeups.map((writeup) => (
				<Writeup key={writeup.id} {...writeup} />
			))}
		</div>
	);
};

export default PolicyWriteups;
