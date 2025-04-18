import { DynamicIcon } from 'lucide-react/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface InstructionProps {
	label: string;
	iconName: string;
	instruction: string;
}

const Instruction = ({ label, iconName, instruction }: InstructionProps) => {
	return (
		<div className='flex flex-col items-center px-6 py-8 md:px-40 lg:flex-row lg:gap-x-14 lg:items-start xl:px-96'>
			<DynamicIcon
				name={iconName as keyof typeof dynamicIconImports}
				size={96}
				className='w-24 stroke-2 stroke-orange-300'
			/>
			<div className='w-fit'>
				<p className='text-center text-xl font-bold pb-5 lg:text-3xl lg:text-start'>
					{label}
				</p>
				<p className='text-base text-center lg:text-lg lg:text-start'>
					{instruction}
				</p>
			</div>
		</div>
	);
};

export default Instruction;
