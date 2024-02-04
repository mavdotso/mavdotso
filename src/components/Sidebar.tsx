import { Code, DraftingCompass, Github, Home, Instagram, LucideCopySlash, PenLine, Twitter, User } from 'lucide-react';
import NavLink from './ui/nav-link';
import Logo from './logo';
import DetailedView from './detailed-view';

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
                            <li>
                                <NavLink path="/">
                                    <Home className="text-primary w-4 h-4" /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink path="/writing">
                                    <PenLine className="w-4 h-4" /> Writing
                                </NavLink>
                            </li>

                            <li>
                                <NavLink path="/projects">
                                    <Code className="w-4 h-4" /> Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink path="/craft">
                                    <DraftingCompass className="w-4 h-4" /> Craft
                                </NavLink>
                            </li>

                            <li>
                                <NavLink path="/toolkit">
                                    <LucideCopySlash className="w-4 h-4" /> Toolkit
                                </NavLink>
                            </li>
                            <li>
                                <NavLink path="/about">
                                    <User className="w-4 h-4" /> About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-6 pl-3.5">
                    <a href="https://twitter.com/mavdotso" target="_blank">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/mavdotso" target="_blank">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href="https://www.instagram.com/vdenisov_/" target="_blank">
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </nav>
            <DetailedView />
        </>
    );
}
