'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { BoardMember } from '@/lib/mixin';
import { postCall, postUser } from '@/lib/database';

const BoardMembers = ({
	boardMemberCount,
	boardMembers,
}: {
	boardMemberCount: number;
	boardMembers: BoardMember[];
}) => {
	const [district, setDistrict] = useState<number>();
	const [uuid, setUUID] = useState<string>('');

	useEffect(() => {
		const storedUUID = document.cookie
			.split('; ')
			.find((row) => row.startsWith('user_uuid'))
			?.split('=')[1];

		if (storedUUID) setUUID(storedUUID);
	}, []);

	const selectItemList = () => {
		const triggers = [];
		for (let i = 1; i <= boardMemberCount; ++i) {
			triggers.push(
				<SelectItem key={i} value={`${i}`}>
					District {i}
				</SelectItem>
			);
		}
		return triggers;
	};

	const handleClick = async (via: string) => {
		try {
			await postCall(uuid, boardMembers[district! - 1].name, via);
			await postUser(uuid);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Select onValueChange={(e) => setDistrict(Number(e))}>
				<SelectTrigger className='border-2 focus-visible:ring-0 font-semibold'>
					<SelectValue placeholder='Select your district' />
				</SelectTrigger>
				<SelectContent className='bg-sea-salt border-2'>
					<SelectGroup>{selectItemList()}</SelectGroup>
				</SelectContent>
			</Select>
			<div className='py-6'>
				{district && (
					<Card className='w-fit border-2'>
						<CardContent className='flex flex-col items-center lg:flex-row lg:px-6 '>
							<div className='w-52 h-52 rounded-full overflow-hidden shrink-0'>
								<Image
									src={boardMembers[district - 1].image_url}
									width={200}
									height={200}
									className='w-full h-full object-cover object-center'
									alt='picture of board member'
								/>
							</div>
							<div className='text-center lg:w-2/3 lg:pl-8 lg:text-start'>
								<h4 className='text-2xl font-bold pt-2 lg:pt-0'>
									{boardMembers[district - 1].name}
								</h4>
								<div className='pt-2'>
									<a
										className='text-3xl text-blue-500 font-semibold underline lg:text-4xl'
										href='tel:PHONE_NUM'
										onClick={() => handleClick('phone')}
									>
										{boardMembers[district - 1].phone}
									</a>
								</div>
								<div className='pt-2'>
									<a
										className='text-xl lg:text-2xl'
										href={`email:${boardMembers[district - 1].email}`}
										onClick={() => handleClick('email')}
									>
										{boardMembers[district - 1].email}
									</a>
								</div>
							</div>
						</CardContent>
					</Card>
				)}
			</div>
		</>
	);
};

export default BoardMembers;
