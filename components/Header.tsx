'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const tabs = [
		{ title: 'What We Do', url: '/what-we-do' },
		{ title: 'Getting Started', url: '/getting-started' },
		{ title: 'Policy Write-ups', url: '/policy-write-ups?page=1' },
		{ title: 'Videos', url: '/videos?page=1' },
		{ title: 'How to Get Involved', url: '/how-to-get-involved' },
	];

	return (
		<header className='sticky top-0 left-0 z-50 p-4 border-b-2 bg-sea-salt'>
			<div className='flex flex-row items-center justify-between'>
				<Link className='z-2' href='/'>
					<Image src='/globe.svg' alt='brand' width={64} height={64} />
				</Link>

				<div className={`${isOpen ? 'mobile-nav' : 'max-lg:hidden'} block`}>
					<nav>
						<ul className='px-12 lg:flex lg:flex-row lg:px-0 lg:gap-x-4'>
							{tabs.map((tab, key) => (
								<li key={key} className='flex flex-col gap-y-8'>
									<Link
										href={tab.url}
										onClick={() => setIsOpen(false)}
										className='relative font-open-sans font-bold uppercase p-2 text-black hover:text-blue-600 max-lg:text-2xl'
									>
										{tab.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<Button
					variant='ghost'
					className='size-12 z-2 lg:hidden'
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? <X className='size-8' /> : <Menu className='size-8' />}
				</Button>
			</div>
		</header>
	);
};

export default Header;
