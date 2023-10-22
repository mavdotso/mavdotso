import { ReactNode } from 'react';

export function PageTitle({ children }: { children: ReactNode }) {
    return <h2 className="text-3xl font-bold text-primary">{children}</h2>;
}
