import Link from 'next/link';

const WriteupCompact = (props: any) => {
	return (
		<Link href={`${props.id}`}>
			<div className='flex flex-row justify-center items-center overflow-y-auto gap-x-4 py-3 border-b-2 border-gray-200'>
				<div className='w-[35%]'>
					<img
						src={props.thumbnail}
						className='overflow-hidden w-full h-auto shrink-0'
					/>
				</div>
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
