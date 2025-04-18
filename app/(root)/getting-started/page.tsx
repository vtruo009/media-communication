import TakeAction from '@/components/TakeAction';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { INSTRUCTIONS, FAQS } from '@/lib/constants';
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

const FAQ = () => {
	return (
		<>
			<h2 className='text-3xl font-bold'>FAQs</h2>
			<Accordion type='single' collapsible className='w-[50vw] h-fit'>
				{FAQS.map((faq, i) => (
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

			<FAQ />

			<TakeAction message='Ready to get started?' />
		</div>
	);
};

export default GettingStarted;
