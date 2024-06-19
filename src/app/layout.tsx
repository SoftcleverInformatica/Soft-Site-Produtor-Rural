// import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sirius Produtor Rural',
	description: 'Soft Clever',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-br'
			className='scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-scHover scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full'>
			<body className={inter.className}>
				{/* <GoogleTagManager gtmId='GTM-N2XFZPPM' /> */}
				{children}
			</body>
		</html>
	);
}
