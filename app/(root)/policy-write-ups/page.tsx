import Writeup from '@/components/Writeup';
import { getAllWriteups } from '@/lib/database';
import { WriteUp } from '@/lib/mixin';

const PolicyWriteups = async () => {
	try {
		const writeups = (await getAllWriteups()) as WriteUp[];

		return (
			<div className='py-12 px-52'>
				{writeups.map((writeup) => (
					<Writeup key={writeup.id} {...writeup} />
				))}
			</div>
		);
	} catch (error) {
		return <p>Error loading write-ups: {(error as Error).message}</p>;
	}
};

export default PolicyWriteups;
