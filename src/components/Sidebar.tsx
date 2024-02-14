import { LucideIcon } from 'lucide-react';
import NavLink from './ui/nav-link';
import Logo from './logo';
import DetailedView from './detailed-view';
import Link from 'next/link';
import { SidebarMenu, SocialLinks } from '@/config/navigation';

interface Props {
    href: string;
    Icon: LucideIcon;
    label?: string;
}

export default function Sidebar() {
    return (
        <>
            <nav className="overflow-hidden flex-none grid w-56 p-2 py-6 content-between">
                <div>
                    <div className="flex items-center pl-3.5">
                        <Logo />
                    </div>
                    <div className="py-6">
                        <ul className="flex flex-col gap-1">
                            {SidebarMenu.map(({ href, label, Icon }) => (
                                <NavItem key={href} href={href} Icon={Icon} label={label} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-6 pl-3.5">
                    {SocialLinks.map(({ href, Icon }, index) => (
                        <SocialLink key={index} href={href} Icon={Icon} />
                    ))}
                </div>
            </nav>
            <DetailedView />
        </>
    );
}

function NavItem({ href, Icon, label }: Props) {
    return (
        <li>
            <NavLink path={href}>
                <Icon className="w-4 h-4" /> {label}
            </NavLink>
        </li>
    );
}

function SocialLink({ href, Icon }: Props) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="w-4 h-4" />
        </Link>
    );
}
