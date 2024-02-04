import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import SiteLayout from '@/components/site-layout';

export const metadata: Metadata = {
    title: 'Mav — I like making stuff',
    description: 'I like making stuff people may find valuable and sometimes write about it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} [text-wrap:balance]`}>
                <SiteLayout>{children}</SiteLayout>
                <div className="fixed inset-0 z-50 pointer-events-none bg-grainy"></div>
            </body>
        </html>
    );
}
