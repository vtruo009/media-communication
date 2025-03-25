import { WriteUp } from '@/lib/mixin';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';

const WriteupCompact = (props: WriteUp) => {
	return (
		<Link href={`${props.id}`}>
			<div className='flex flex-row justify-start items-center overflow-y-auto gap-x-4 py-3 border-b-2 border-gray-200'>
				{/* <div className='flex flex-row justify-center items-center overflow-y-auto gap-x-4 py-3 border-b-2 border-gray-200'> */}
				{/* <div className='w-[35%]'>
					<img
						src={props.thumbnail}
						alt='write-up-thumbnail'
						className='object-contain w-full h-auto'
					/>
				</div> */}
				<Newspaper />
				<div className='w-[65%] leading-none'>
					<span className='text-xs text-gray-500'>
						{props.published.toDateString()}
					</span>
					<br />
					<span className='text-xs'>{props.title}</span>
				</div>
			</div>
		</Link>
	);
};

export default WriteupCompact;
