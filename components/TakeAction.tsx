import Link from 'next/link';

const TakeAction = ({ message }: { message: string }) => {
	return (
		<div className='w-full h-fit flex flex-col items-center justify-evenly p-6'>
			<h2 className='text-4xl font-bold text-center pb-8'>{message}</h2>
			<div className='w-full flex flex-col items-center justify-center gap-4 sm:flex-row'>
				<Link
					href='./policy-write-ups?page=1'
					className='w-[200px] text-lg bg-blue-300 rounded-lg text-center p-3'
				>
					View Write-ups
				</Link>
				<Link
					href='./videos?page=1'
					className='w-[200px] text-lg bg-blue-300 rounded-lg text-center p-3'
				>
					View Videos
				</Link>
			</div>
		</div>
	);
};

export default TakeAction;
