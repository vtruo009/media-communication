import Instruction from '@/components/Instruction';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchCheck } from 'lucide-react';

describe('<Instruction />', () => {
	it('should render the instruction component that displays an icon, label, and text', () => {
		const instruction = {
			label: 'Choose an issue you care about',
			icon: <SearchCheck className='instruction-icon' />,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat neque. Duis id sapien a lorem consectetur porta id in quam. Nulla quis commodo lorem. Donec enim nisl, tempor quis luctus a, condimentum in nisl. Cras maximus erat id velit congue facilisis. Integer et nulla vel tellus laoreet fringilla.',
		};
		const { container } = render(
			<Instruction
				label={instruction.label}
				icon={instruction.icon}
				instruction={instruction.text}
			/>
		);

		expect(screen.getByText(instruction.label)).toBeInTheDocument();
		expect(
			container.getElementsByClassName('instruction-icon')[0]
		).toBeInTheDocument();
		expect(screen.getByText(instruction.text)).toBeInTheDocument();
	});
});
