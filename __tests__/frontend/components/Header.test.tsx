import Header from '@/components/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
	it('should render 5 tab items', () => {
		render(<Header />);

		const header = screen.getByRole('navigation');

		expect(header.childElementCount).toEqual(5);
	});

	it.todo(
		'should render the correct page when the navigation items are clicked'
	);
});
