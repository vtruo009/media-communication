import { Contact } from '@/lib/mixin';

const ContactInfo = ({ name, phone, email, image }: Contact) => {
	return (
		<div className='flex gap-x-8 px-4'>
			<div className='w-52 h-52 overflow-hidden'>
				<img
					src={image}
					className='w-full h-full object-cover object-top rounded-full'
					alt='representative picture'
				/>
			</div>
			<div className='w-2/3'>
				<h4 className='text-2xl font-bold mb-2'>{name}</h4>
				<div>
					<a href='tel:PHONE_NUM' className='text-4xl'>
						{phone}
					</a>
				</div>
				<br />
				<a href={`email:${email}`} className='text-2xl'>
					{email}
				</a>
				{/* <h3 className='text-2xl font-bold mb-1'>Local office numbers:</h3> */}
				{/* {localOfficeNumbers.map((localPhone) => (
					<div>
						<a href={`tel:${localPhone}`} className='text-lg'>
							{localPhone}
						</a>
					</div>
				))} */}
			</div>
		</div>
	);
};

export default ContactInfo;
