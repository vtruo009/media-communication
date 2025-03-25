import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const tabs = [
		{ title: 'What We Do', url: '/what-we-do' },
		{ title: 'Getting Started', url: '/getting-started' },
		{ title: 'Policy Write-ups', url: '/policy-write-ups?page=1' },
		{ title: 'Videos', url: '/videos' },
		{ title: 'How to Get Involved', url: '/how-to-get-involved' },
	];

	return (
		<header className='sticky top-0 left-0 z-50 w-full bg-sea-salt border-b-2 py-3'>
			<div className='flex items-center justify-between px-5 lg:px-7 xl:px-10 max-lg:py-4'>
				<Link className='w-[12rem] lg:mr-8' href='/'>
					<Image src='/globe.svg' alt='brand' width={64} height={64} />
				</Link>
				<nav className='top-0-[5rem] left-0 right-0 bottom-0 gap-7 lg:flex lg:bg-transparent'>
					{tabs.map((tab, key) => (
						<div
							key={key}
							className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'
						>
							<Link
								href={tab.url}
								className='relative font-open-sans font-bold uppercase p-2 text-black hover:text-blue-600 max-lg:text-2xl'
							>
								{tab.title}
							</Link>
						</div>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
