import React from 'react';
import EmailSubscription from './EmailSubscription';
import Link from 'next/link';

const Section = ({ label }: { label: string }) => {
	const allLinks: { [key: string]: { url: string; display: string }[] } = {
		community: [
			{
				url: '',
				display: `display name`,
			},
			{
				url: '',
				display: `display name`,
			},
			{
				url: '',
				display: `display name`,
			},
		],
	};

	return (
		<div className='md:max-lg:row-span-1 md:max-lg:p-4'>
			<h4 className='text-lg font-bold text-gray-500 capitalize'>{label}</h4>
			<ul>
				{allLinks[label].map((link, i) => (
					<li key={`${label}-${i}`}>
						<Link href={link.url}>{`${link.display}-${i}`}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className='w-full h-screen flex flex-col justify-evenly items-start border-t-2 px-6 md:max-lg:md:grid md:h-fit md:max-lg:grid-cols-2 md:py-6 lg:flex-row lg:py-8'>
			<div>
				<h2 className='text-lg font-bold'>BRAND NAME</h2>
				<a className='my-4' href='mailto:media@communications.com'>
					media@communications.com
				</a>
				<br />
				<a href='tel:+16266008544'>(123)-123-1234</a>
				<br />
				<a
					href='https://maps.google.com/maps?q=8972 Heritage Avenue Rocklin CA 95677'
					target='_blank'
				>
					8972 Heritage Avenue Rocklin
					<br />
					CA 95677
				</a>
			</div>
			<Section label='community' />
			<div className='md:max-lg:row-span-1 md:max-lg:p-4'>
				<EmailSubscription />
			</div>
		</footer>
	);
};

export default Footer;
