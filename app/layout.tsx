import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

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
			<body className='min-h-screen antialiased font-geist-mono bg-sea-salt'>
				<Header />
				<div className='min-h-screen'>{children}</div>
				<Footer />
				<Toaster richColors />
			</body>
		</html>
	);
}
