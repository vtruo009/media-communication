'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { contacts } from '@/lib/constants';
import Image from 'next/image';

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
						<Card className='w-fit border-2'>
							<CardContent className='flex flex-col items-center lg:flex-row lg:px-6 '>
								<div className='w-52 h-52 rounded-full overflow-hidden shrink-0'>
									<Image
										src={contact.image}
										width={200}
										height={200}
										className='w-full h-full object-cover object-center'
										alt='picture of board member'
									/>
								</div>
								<div className='text-center lg:w-2/3 lg:pl-8 lg:text-start'>
									<h4 className='text-2xl font-bold pt-2 lg:pt-0'>
										{contact.name}
									</h4>
									<div className='pt-2'>
										<a
											href='tel:PHONE_NUM'
											className='text-3xl text-blue-500 font-semibold lg:text-4xl'
										>
											{contact.phone}
										</a>
									</div>
									<div className='pt-2'>
										<a
											href={`email:${contact.email}`}
											className='text-xl lg:text-2xl'
										>
											{contact.email}
										</a>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default ContactTab;
