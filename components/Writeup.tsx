import React from 'react';
import Link from 'next/link';
import { WriteUp } from '@/lib/mixin';
import { Newspaper } from 'lucide-react';

const Writeup = (writeup: WriteUp) => {
	return (
		<Link
			id='write-up'
			href={`policy-write-ups/${writeup.id}`}
			className='flex flex-row h-auto border-b-2 border-gray-300 mb-4 last:mb-0'
		>
			{/* <div
				id='thumbnail-container'
				className='w-[250px] flex shrink-0 justify-center items-center p-2'
			>
				<img
					src='/pusd.png'
					alt='write-up-thumbnail'
					className='object-contain w-full h-full'
				/>
			</div> */}
			<div
				id='write-up-details'
				className='flex flex-col justify-start items-start py-4 gap-y-4' //py-10 when using thumbnail
			>
				<p id='short-desc' className='text-xs text-gray-500'>
					{writeup.published.toDateString()}
				</p>
				<div
					id='title'
					className='flex flex-row w-full justify-start items-center gap-x-4'
				>
					<Newspaper />
					<h3 className='font-bold text-base'>{writeup.title}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Writeup;
