import Writeup from '@/components/Writeup';
import { getAllWriteups } from '@/lib/database';
import { transformData } from '@/lib/utils';

const PolicyWriteups = async () => {
	try {
		const data = await getAllWriteups();
		const writeups = transformData(data);

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
