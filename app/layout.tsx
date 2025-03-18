import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'Media Communications',
	description:
		'A media communication website that provide bullet overviews of policies regarding current issues in the school district.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='min-h-screen antialiased font-geist-mono'>
				<Header />
				{children}
			</body>
		</html>
	);
}
