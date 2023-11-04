import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
    title: 'Mav — I like making stuff people may find valuable',
    description: 'I like making stuff people may find valuable and sometimes write about it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} h-screen w-full bg-muted flex flex-row p-2 [text-wrap:balance]`}>
                <Sidebar />
                <main className="overflow-auto flex-grow bg-background h-full w-full rounded-md py-8 px-12">{children}</main>
            </body>
        </html>
    );
}
