import TakeAction from '@/components/TakeAction';
import { SearchCheck, MapPinned, PhoneCall } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { ReactElement } from 'react';

interface InstructionProps {
	label: string;
	icon: ReactElement;
	instruction: string;
}

const Instruction = ({ label, icon, instruction }: InstructionProps) => {
	return (
		<div className='flex flex-col items-center px-6 py-8 lg:flex-row lg:gap-x-14 lg:items-start'>
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

// TODO: Move to constants.ts
const faqs = [
	{
		question: 'What is the purpose of this website?',
		answer:
			'To provide a platform for users who would like to make a difference in the PUSD.',
	},
	{
		question: 'How long do I have for each call?',
		answer: 'Keep it short. A call can be under a minute.',
	},
	{
		question: 'What do I say?',
		answer:
			'We provide a script on the overview page. Stick to the script or feel free to improvise!',
	},
];

const FAQ = () => {
	return (
		<>
			<h2 className='text-3xl font-bold'>FAQs</h2>
			<Accordion type='single' collapsible className='w-[50vw] h-fit'>
				{faqs.map((faq, i) => (
					<AccordionItem key={`faq-${i}`} value={`faq-${i}`}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent className='data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'>
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

const GettingStarted = () => {
	// TODO: Move to constants.ts
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
		<div className='hit-fit flex flex-col items-center lg:px-60'>
			{instructions.map((instruction) => (
				<Instruction
					key={instruction.label}
					label={instruction.label}
					icon={instruction.icon}
					instruction={instruction.text}
				/>
			))}

			<FAQ />

			<TakeAction message='Ready to get started?' />
		</div>
	);
};

export default GettingStarted;
