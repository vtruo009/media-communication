import { Button } from './ui/button';

const TakeAction = ({ message }: { message: string }) => {
	return (
		<div className='w-full h-fit flex flex-col items-center justify-evenly p-6'>
			<h2 className='text-4xl font-bold text-center pb-8'>{message}</h2>
			<div className='w-full flex flex-col items-center justify-center gap-4 sm:flex-row'>
				<Button className='w-[200px] h-[50px] text-lg bg-blue-300'>
					View Write-ups
				</Button>
				<Button className='w-[200px] h-[50px] text-lg bg-blue-300'>
					View Videos
				</Button>
			</div>
		</div>
	);
};

export default TakeAction;
