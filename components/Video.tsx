import Link from 'next/link';
import { Video as VideoIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface VideoProps {
	id: string;
	title: string;
	published: Date;
	compact?: boolean;
}

const Video = ({ id, title, published, compact = false }: VideoProps) => {
	return (
		<Card
			className={`border-0 border-b-2 border-b-gray-300 rounded-none shadow-none ${
				compact ? 'py-3' : ''
			}`}
		>
			<CardContent>
				<Link
					id='write-up'
					href={`${compact ? '' : 'videos/'}${id}`}
					className='flex flex-row gap-x-4 items-center justify-start'
				>
					<VideoIcon size={compact ? 24 : 36} />
					<div id='write-up-details'>
						<p className='text-xs text-gray-500'>{published.toDateString()}</p>
						<h3
							className={`${compact ? 'text-base' : 'text-xl'} font-semibold`}
						>
							{title}
						</h3>
					</div>
				</Link>
			</CardContent>
		</Card>
	);
};

export default Video;
