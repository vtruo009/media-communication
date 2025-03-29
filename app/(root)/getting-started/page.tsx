import Instruction from '@/components/Instruction';
import { SearchCheck, MapPinned, PhoneCall } from 'lucide-react';

const GettingStarted = () => {
	const instructions = [
		{
			label: 'Choose an issue you care about',
			icon: <SearchCheck className='instruction-icon' />,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat neque. Duis id sapien a lorem consectetur porta id in quam. Nulla quis commodo lorem. Donec enim nisl, tempor quis luctus a, condimentum in nisl. Cras maximus erat id velit congue facilisis. Integer et nulla vel tellus laoreet fringilla.',
		},
		{
			label: 'Enter your location',
			icon: <MapPinned className='instruction-icon' />,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat neque. Duis id sapien a lorem consectetur porta id in quam. Nulla quis commodo lorem. Donec enim nisl, tempor quis luctus a, condimentum in nisl. Cras maximus erat id velit congue facilisis. Integer et nulla vel tellus laoreet fringilla.',
		},
		{
			label: 'Make your call',
			icon: <PhoneCall className='instruction-icon' />,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat neque. Duis id sapien a lorem consectetur porta id in quam. Nulla quis commodo lorem. Donec enim nisl, tempor quis luctus a, condimentum in nisl. Cras maximus erat id velit congue facilisis. Integer et nulla vel tellus laoreet fringilla.',
		},
	];

	return (
		<div className='flex flex-col items-center'>
			{instructions.map((instruction) => (
				<Instruction
					key={instruction.label}
					label={instruction.label}
					icon={instruction.icon}
					instruction={instruction.text}
				/>
			))}
		</div>
	);
};

export default GettingStarted;
