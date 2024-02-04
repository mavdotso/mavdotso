import Content from './content';
import Sidebar from './sidebar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-full bg-secondary flex flex-row">
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}
