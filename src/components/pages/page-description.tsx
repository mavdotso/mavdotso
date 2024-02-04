import { ReactNode } from 'react';

export function PageDescription({ children }: { children: ReactNode }) {
    return <p className="text-sm leading-relaxed text-secondary-font">{children}</p>;
}
