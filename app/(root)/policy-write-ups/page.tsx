import Writeup from '@/components/Writeup';
import { Newspaper } from 'lucide-react';

const PolicyWriteups = () => {
	const writeups = [
		{
			id: 1,
			date: new Date(),
			url: '',
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title:
				'Poll: With More Than Half the Public Saying They or a Family Member Have Been Covered by Medicaid, Large Majorities Don’t Want Cuts, Including Most Trump Voters and Rural Residents',
			shortDesc: 'This is a short description about the policy write-up.',
		},
		{
			id: 2,
			date: new Date(),
			url: '',
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title: 'Article #2',
			shortDesc: 'This is a short description about the policy write-up.',
		},
		{
			id: 3,
			date: new Date(),
			url: '',
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title: 'Article #3',
			shortDesc: 'This is a short description about the policy write-up.',
		},
		{
			url: '',
			date: new Date(),
			id: 4,
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title: 'Article #4',
			shortDesc: 'This is a short description about the policy write-up.',
		},
		{
			id: 5,
			date: new Date(),
			url: '',
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title: 'Article #5',
			shortDesc: 'This is a short description about the policy write-up.',
		},
	];

	return (
		<div className='py-12 px-52'>
			{writeups.map((writeup) => (
				<Writeup key={writeup.id} {...writeup} />
			))}
		</div>
	);
};

export default PolicyWriteups;
