import Instruction from '@/components/Instruction';
import TakeAction from '@/components/TakeAction';
import { INSTRUCTIONS } from '@/lib/constants';

const GettingStarted = () => {
	return (
		<div className='flex flex-col items-center'>
			{INSTRUCTIONS.map((instruction) => (
				<Instruction
					key={instruction.label}
					label={instruction.label}
					iconName={instruction.icon}
					instruction={instruction.text}
				/>
			))}
			<TakeAction message='Ready to get started?' />
		</div>
	);
};

export default GettingStarted;
