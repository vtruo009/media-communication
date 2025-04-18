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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { BoardMember, CallMethod } from '@/lib/mixin';
import { getUserActivities, putCall } from '@/lib/database';
import ActionWarningDialog from './ActionWarningDialog';
import { Info } from 'lucide-react';

enum CallOutcome {
	SUCCESSFUL = 'successful',
	VOICEMAIL = 'voicemail',
	EMAIL = 'email',
}

const BoardMembers = ({
	issueId,
	boardMemberCount,
	boardMembers,
}: {
	issueId: string;
	boardMemberCount: number;
	boardMembers: BoardMember[];
}) => {
	const [userId, setUserId] = useState<string>('');
	const [district, setDistrict] = useState<number>();
	const [callId, setCallId] = useState<string>('');
	const [disablePhone, setDisablePhone] = useState<boolean>(false);
	const [disableEmail, setDisableEmail] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			const storedUUID = document.cookie
				.split('; ')
				.find((row) => row.startsWith('user_uuid'))
				?.split('=')[1];

			if (storedUUID) {
				setUserId(storedUUID);
				const { num_calls: numCalls, num_emails: numEmails } =
					await getUserActivities(storedUUID, issueId);
				setDisablePhone(numCalls > 0);
				setDisableEmail(numEmails > 0);
			}
		})();
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

	const updateCallOutcome = async (outcome: CallOutcome) => {
		try {
			await putCall(callId, outcome);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className='inline-flex items-center gap-x-2'>
				<Select onValueChange={(e) => setDistrict(Number(e))}>
					<SelectTrigger className='border-2 focus-visible:ring-0 font-semibold'>
						<SelectValue placeholder='Select district' />
					</SelectTrigger>
					<SelectContent className='bg-sea-salt border-2'>
						<SelectGroup>{selectItemList()}</SelectGroup>
					</SelectContent>
				</Select>
				<Popover>
					<PopoverTrigger>
						<Info className='w-4 h-4' />
					</PopoverTrigger>
					<PopoverContent className='text-center text-xs italic bg-gray-200 rounded-lg border-0'>
						Image and contact info sourced from{' '}
						<a
							href='https://www.pusd.us/about/board-of-education/board-members'
							target='_blank'
							rel='noopener noreferrer'
							className='underline text-blue-500'
						>
							PUSD official website
						</a>
					</PopoverContent>
				</Popover>
			</div>
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
								<div className='w-full text-center lg:w-2/3 lg:pl-8 lg:text-start'>
									<h4 className='text-2xl font-bold pt-2 lg:pt-0'>
										{boardMembers[district - 1].name}
									</h4>
									{disablePhone ? (
										<p className='pt-2'>You have made a prior call.</p>
									) : (
										<ActionWarningDialog
											userId={userId}
											method={CallMethod.PHONE}
											contact={boardMembers[district! - 1].phone}
											boardMemberName={boardMembers[district! - 1].name}
											issueId={issueId}
											setCallId={setCallId}
											setDisablePhone={setDisablePhone}
											setDisableEmail={setDisableEmail}
										/>
									)}
									{disableEmail ? (
										<p className='pt-2'>
											The board member has received your email regarding this
											issue.
										</p>
									) : (
										<ActionWarningDialog
											userId={userId}
											method={CallMethod.EMAIL}
											contact={boardMembers[district! - 1].email}
											boardMemberName={boardMembers[district! - 1].name}
											issueId={issueId}
											setCallId={setCallId}
											setDisablePhone={setDisablePhone}
											setDisableEmail={setDisableEmail}
										/>
									)}
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
											className='bg-blue-300 w-[150px] hover:bg-blue-400 cursor-pointer focus-visible:ring-0'
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
