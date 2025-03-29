import React from 'react';
import EmailSubscription from './EmailSubscription';
import Link from 'next/link';

const Section = ({ label }: { label: string }) => {
	const allLinks: { [key: string]: { url: string; display: string }[] } = {
		company: [
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
		troubleshoot: [
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
			<Section label='company' />
			<Section label='troubleshoot' />
			<Section label='community' />
			<div className='md:max-lg:row-span-1 md:max-lg:p-4'>
				<EmailSubscription />
			</div>
		</footer>
	);
};

export default Footer;
