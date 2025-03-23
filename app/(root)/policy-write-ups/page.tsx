'use client';

import Writeup from '@/components/Writeup';
import { writeups } from '@/lib/constants';
import { useState } from 'react';
import { WriteUp } from '@/lib/mixin';
import Search from '@/components/Search';

const PolicyWriteups = () => {
	const [filteredWriteups, setFilteredWriteups] = useState<WriteUp[]>(writeups);

	return (
		<div className='py-12 px-52'>
			<Search writeups={writeups} setFilteredWriteups={setFilteredWriteups} />
			{filteredWriteups.map((writeup) => (
				<Writeup key={writeup.id} {...writeup} />
			))}
		</div>
	);
};

export default PolicyWriteups;
