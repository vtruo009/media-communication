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
import { Button } from '@/components/ui/button';
import { BoardMember } from '@/lib/mixin';
import { postCall, postUser, putCall } from '@/lib/database';

enum CallOutcome {
	SUCCESSFUL = 'successful',
	VOICEMAIL = 'voicemail',
	EMAIL = 'email',
}

const BoardMembers = ({
	issueId,
	boardMemberCount,
	boardMembers,
	disablePhone,
	disableEmail,
}: {
	issueId: string;
	boardMemberCount: number;
	boardMembers: BoardMember[];
	disablePhone: boolean;
	disableEmail: boolean;
}) => {
	const [district, setDistrict] = useState<number>();
	const [userId, setUserId] = useState<string>('');
	const [callId, setCallId] = useState<string>('');

	useEffect(() => {
		const storedUUID = document.cookie
			.split('; ')
			.find((row) => row.startsWith('user_uuid'))
			?.split('=')[1];

		if (storedUUID) setUserId(storedUUID);
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
			await postUser(userId);
			const storedCallId: string = await postCall(
				userId,
				boardMembers[district! - 1].name,
				via,
				issueId
			);
			setCallId(storedCallId);
			await postUser(userId);
		} catch (error) {
			console.error(error);
		}
	};

	const updateCallOutcome = async (outcome: CallOutcome) => {
		try {
			await putCall(callId, outcome);
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
					<>
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
										{disablePhone ? (
											<p>You have made a prior call.</p>
										) : (
											<a
												className='text-3xl text-blue-500 font-semibold underline lg:text-4xl'
												href='tel:PHONE_NUM'
												onClick={() => handleClick('phone')}
											>
												{boardMembers[district - 1].phone}
											</a>
										)}
									</div>
									<div className='pt-2'>
										{disableEmail ? (
											<p>You have sent the trustee an email.</p>
										) : (
											<a
												className='text-xl lg:text-2xl'
												href={`email:${boardMembers[district - 1].email}`}
												onClick={() => handleClick('email')}
											>
												{boardMembers[district - 1].email}
											</a>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
						{callId && (
							<div className='py-4'>
								<div className='mb-4'>
									Please share the result of your call to encourage others to
									take action:
								</div>
								<div className='flex flex-col gap-4 md:flex-row'>
									{Object.keys(CallOutcome).map((outcome) => (
										<Button
											key={CallOutcome[outcome as keyof typeof CallOutcome]}
											className='bg-blue-300 w-[150px] hover:bg-blue-400 cursor-pointer'
											onClick={() =>
												updateCallOutcome(
													CallOutcome[outcome as keyof typeof CallOutcome]
												)
											}
										>
											{outcome}
										</Button>
									))}
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default BoardMembers;
