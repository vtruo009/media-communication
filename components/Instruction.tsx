import React, { ReactElement } from 'react';

interface InstructionProps {
	label: string;
	icon: ReactElement;
	instruction: string;
}

const Instruction = ({ label, icon, instruction }: InstructionProps) => {
	return (
		<div className='flex flex-col items-center px-6 py-8 lg:flex-row lg:gap-x-14 lg:items-start lg:px-60'>
			<div className='pb-5'>{icon}</div>
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
