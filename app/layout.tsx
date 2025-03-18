import type { Metadata } from 'next';
import './globals.css';

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
				{children}
			</body>
		</html>
	);
}
