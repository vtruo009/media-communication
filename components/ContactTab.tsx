'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import ContactInfo from './ContactInfo';
import { contacts } from '@/lib/constants';

const ContactTab = () => {
	const [state, setTab] = useState('board-member-0');

	const handleOnChange = (value: string) => {
		setTab(value);
	};

	return (
		<div>
			<Tabs defaultValue={state} onValueChange={handleOnChange}>
				<TabsList
					className={`grid grid-flow-col grid-cols-[repeat(${contacts.length}, minmax(0,1fr))] justify-start items-center bg-gray-200`}
				>
					{contacts.map((contact, i) => (
						<TabsTrigger
							key={`${contact.name}-tab`}
							value={`board-member-${i}`}
							className='text-slate-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 rounded-md transition'
						>
							{contact.name}
						</TabsTrigger>
					))}
				</TabsList>
				{contacts.map((contact, i) => (
					<TabsContent
						value={`board-member-${i}`}
						key={`${contact.name}-content`}
					>
						<Card className='border-2'>
							<CardContent>
								<ContactInfo {...contact} />
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default ContactTab;
