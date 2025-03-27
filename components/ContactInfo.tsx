import { Contact } from '@/lib/mixin';
import Image from 'next/image';

const ContactInfo = ({ name, phone, email, image }: Contact) => {
	return (
		<div className='flex gap-x-8 px-4'>
			<div className='w-52 h-52 rounded-full overflow-hidden'>
				<Image
					src={image}
					width={200}
					height={200}
					className='w-full h-full object-cover object-center'
					alt='picture of board member'
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
			</div>
		</div>
	);
};

export default ContactInfo;
