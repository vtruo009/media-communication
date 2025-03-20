import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Writeup from '@/components/Writeup';
import { Newspaper } from 'lucide-react';

describe('<Writeup />', () => {
	it('should render the write-up title, short description, and thumbnail/icon of a policy write-up', () => {
		const testWriteup = {
			id: 1,
			date: new Date(),
			url: '',
			thumbnail: '/pusd.png',
			icon: <Newspaper className='write-up-icon' />,
			title:
				'Poll: With More Than Half the Public Saying They or a Family Member Have Been Covered by Medicaid, Large Majorities Don’t Want Cuts, Including Most Trump Voters and Rural Residents',
			shortDesc: 'This is a short description about the policy write-up.',
		};
		render(<Writeup {...testWriteup} />);

		const title = screen.getByRole('heading', { level: 3 });
		const thumbnail = screen.getByAltText('write-up-thumbnail');
		const shortDesc = screen.getByRole('paragraph');

		expect(title.textContent).toEqual(testWriteup.title);
		expect(thumbnail).toBeInTheDocument();
		expect(shortDesc.textContent).toEqual(testWriteup.shortDesc);
	});
});
