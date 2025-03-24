import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full h-[50vh] flex flex-row border-t-2'>
			<div className='w-2/3'>This is the left side of the footer</div>
			<div className='w-1/3 bg-[#EDE6F2]'>
				This is the right side of the footer where the contact form should be
				<div className='w-full border rounded-xl'>Contact form</div>
			</div>
		</footer>
	);
};

export default Footer;
