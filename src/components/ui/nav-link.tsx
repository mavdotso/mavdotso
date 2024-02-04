'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ children, path }: { children: ReactNode; path: string }) {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            className={`border flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${pathname === path ? ' border-input bg-background shadow-sm' : 'border-transparent hover:bg-background'}`}
        >
            {children}
        </Link>
    );
}
