import { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
    return <div className="container flex flex-col max-w-2xl py-14 gap-4">{children}</div>;
}
