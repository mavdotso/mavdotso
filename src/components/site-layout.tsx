import Content from './content';
import Sidebar from './sidebar';

interface Props {
    list: React.ReactElement | null;
    detail: React.ReactElement | null;
    hasDetail?: boolean;
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-full bg-secondary flex flex-row">
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
    return (
        <div className="flex w-full">
            {list && (
                <div id="list" className={`bg-dots ${hasDetail ? 'hidden lg:flex' : 'min-h-screen w-full'}`}>
                    {list}
                </div>
            )}
            {detail}
        </div>
    );
}
