'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { addUser } from '@/lib/database';

const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const EmailSubscription = () => {
	const [email, setEmail] = useState<string>('');

	const handleOnClick = async () => {
		if (!email.trim()) {
			toast.error('Email cannot be empty.');
		} else if (!isValidEmail(email)) {
			toast.error('Please enter a valid email.');
		} else {
			try {
				await addUser(email);
				toast.success('You will receive weekly updates/announcements!');
			} catch (error) {
				toast.error('This email is already subscribed.');
			}
		}
	};

	return (
		<div className='w-1/2 flex flex-col items-start p-8'>
			<h2 className='font-semibold text-2xl mb-8'>
				Subscribe for updates and announcements.
			</h2>
			<div className='w-full flex flex-row gap-x-4'>
				<Input
					placeholder='example@email.com'
					type='email'
					className='w-full h-12 focus-visible:ring-0 p-4 rounded-lg bg-white border-0'
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<Button
					className='bg-white hover:bg-gray-100 h-auto rounded-lg cursor-pointer font-semibold'
					onClick={handleOnClick}
				>
					SUBSCRIBE
				</Button>
			</div>
		</div>
	);
};

export default EmailSubscription;
