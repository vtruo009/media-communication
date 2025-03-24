import React from 'react';
import EmailSubscription from './EmailSubscription';

const Footer = () => {
	return (
		<footer className='w-full h-[25vh] min-2xl:h-[15vh] flex flex-row border-t-2'>
			<div className='w-1/2'>This is the left side of the footer</div>
			<EmailSubscription />
		</footer>
	);
};

export default Footer;
