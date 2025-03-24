import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className='w-full h-[30vh] flex flex-row border-t-2'>
			<div className='w-1/2'>This is the left side of the footer</div>
			<div className='w-1/2 flex flex-col items-start p-8'>
				<h2 className='font-semibold text-2xl mb-8'>
					Sign up for updates and announcements.
				</h2>
				<div className='w-full flex flex-row gap-x-4'>
					<Input
						placeholder='example@email.com'
						className='w-full h-12 focus-visible:ring-0 p-4 rounded-lg bg-white border-0'
					/>
					<Button className='bg-white hover:bg-gray-100 h-auto rounded-lg cursor-pointer'>
						Sign Up
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
