import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import Sidebar from '@/components/sidebar';
import DetailedView from '@/components/detailed-view';

export const metadata: Metadata = {
    title: 'Mav — I like making stuff people may find valuable',
    description: 'I like making stuff people may find valuable and sometimes write about it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className}  h-screen w-full bg-secondary flex flex-row p-2 [text-wrap:balance]`}>
                <Sidebar />
                {/* <DetailedView /> */}
                <main className="overflow-auto flex-grow bg-background border h-full w-full rounded-md py-8 px-12">{children}</main>
                <div className="fixed inset-0 z-50 pointer-events-none bg-grainy"></div>
            </body>
        </html>
    );
}
