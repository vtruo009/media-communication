'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import ContactInfo from './ContactInfo';
import { useState } from 'react';

export type Contact = {
	info: {
		name: string;
		phone: string;
		localOfficeNumbers: string[];
	};
	role: string;
};

const ContactTab = () => {
	const contacts: Contact[] = [
		{
			info: {
				name: 'Judy Chu',
				phone: '111-111-1111',
				localOfficeNumbers: ['111-111-1111', '111-111-1111'],
			},
			role: 'House Representative',
		},
		{
			info: {
				name: 'Adam Schiff',
				phone: '111-111-1111',
				localOfficeNumbers: ['111-111-1111', '111-111-1111'],
			},
			role: 'Senator',
		},
		{
			info: {
				name: 'Alex Padilla',
				phone: '111-111-1111',
				localOfficeNumbers: ['111-111-1111', '111-111-1111'],
			},
			role: 'Senator',
		},
	];
	const [state, setTab] = useState(`${contacts[0].role}-0`);

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
							value={`${contact.role}-${i}`}
							className='text-slate-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 rounded-md transition'
						>
							{contact.role}
						</TabsTrigger>
					))}
				</TabsList>
				{contacts.map((contact, i) => (
					<TabsContent value={`${contact.role}-${i}`}>
						<Card className='border-2'>
							<CardContent>
								<ContactInfo {...contact.info} />
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default ContactTab;
