'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { postCall, postUser } from '@/lib/database';
import { Dispatch, SetStateAction, useState } from 'react';
import { CallMethod } from '@/lib/mixin';

interface ActionWarningDialogProps {
	userId: string;
	method: string;
	contact: string;
	boardMemberName: string;
	issueId: string;
	setCallId: Dispatch<SetStateAction<string>>;
	setDisablePhone: Dispatch<SetStateAction<boolean>>;
	setDisableEmail: Dispatch<SetStateAction<boolean>>;
}

const ActionWarningDialog = ({
	userId,
	method,
	contact,
	boardMemberName,
	issueId,
	setCallId,
	setDisablePhone,
	setDisableEmail,
}: ActionWarningDialogProps) => {
	const [href, setHref] = useState<string>('');
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setDialogOpen(true);
		setHref(`${method === 'email' ? 'mailto' : 'phone'}:${contact}`);
	};

	const handleConfirm = async () => {
		try {
			await postUser(userId);
			const storedCallId: string = await postCall(
				userId,
				boardMemberName,
				method,
				issueId
			);
			setCallId(storedCallId);
			await postUser(userId);
			window.location.href = href;
			setDialogOpen(false);

			if (method === CallMethod.PHONE) setDisablePhone(true);
			else setDisableEmail(true);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
			<DialogTrigger asChild>
				<div className='pt-2'>
					<a
						className='text-xl lg:text-2xl'
						href={`${method === 'email' ? 'mailto' : 'tel'}:`}
						onClick={handleClick}
					>
						{contact}
					</a>
				</div>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] bg-sea-salt'>
				<DialogHeader>
					<DialogTitle>Please note!</DialogTitle>
					<DialogDescription>
						To aleviate the burden of the board members, we ask you to only make
						one call and/or send one email for each issue. Please confirm to
						continue.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button
						className='bg-blue-300 hover:bg-blue-400 cursor-pointer'
						onClick={handleConfirm}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ActionWarningDialog;
