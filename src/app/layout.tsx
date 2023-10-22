import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mav — I like making stuff people may find valuable',
    description: 'I like making stuff people may find valuable and sometimes write about it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} h-screen w-full bg-muted flex flex-row p-2 [text-wrap:balance]`}>
                <Sidebar />
                <main className="overflow-auto flex-grow bg-background h-full w-full rounded-md py-8 px-12">{children}</main>
            </body>
        </html>
    );
}
