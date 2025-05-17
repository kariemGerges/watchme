import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// Components
import Navbar from '@/app/components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'WatchMe',
    description: 'E-commerce website for watches',
    keywords: ['watches', 'timepieces', 'luxury', 'luxury watches'],
    authors: [
        { name: 'Kariem Gerges', url: 'https://github.com/KariemGerges' },
    ],
    creator: 'Kariem Gerges',
    openGraph: {
        title: 'WATCHME',
        description: 'E-commerce website for watches',
        url: 'https://watchme.vercel.app',
        siteName: 'watchme.vercel.app',
        locale: 'en-US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* Navigation */}
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
