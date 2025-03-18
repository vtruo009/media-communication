import React, { ReactElement } from 'react';

interface InstructionProps {
	label: string;
	icon: ReactElement;
	instruction: string;
}

const Instruction = ({ label, icon, instruction }: InstructionProps) => {
	return (
		<div className='flex flex-row px-10 mb-10 gap-x-14 items-start'>
			{icon}
			<div className='w-xl'>
				<p className='text-5xl font-bold pb-5'>{label}</p>
				<p className='text-2xl'>{instruction}</p>
			</div>
		</div>
	);
};

export default Instruction;
