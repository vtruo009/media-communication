'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { postUser } from '@/lib/database';

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
				await postUser(email);
				toast.success(
					'You have successfully subscribed to weekly updates/announcements!'
				);
				setEmail('');
			} catch (error) {
				console.error(error);
				toast.error('This email is already subscribed.');
			}
		}
	};

	return (
		<div className='flex flex-col items-start'>
			<h4 className='font-semibold text-2xl mb-6 md:text-lg md:mb-4'>
				Subscribe for updates and announcements.
			</h4>
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
