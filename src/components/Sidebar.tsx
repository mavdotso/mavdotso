import { Code, DraftingCompass, Frame, Github, Home, Instagram, PenLine, Twitter, User } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import NavLink from './ui/NavLink';

export default function Sidebar() {
    return (
        <menu className="overflow-hidden flex-none grid w-64 p-4 content-between">
            <div>
                <div className="flex items-center gap-4">
                    <Image src="/mav.svg" height="50" width="50" alt="Mav logo" />
                    <p className="font-medium">Hi, I&#39;m Mav</p>
                </div>
                <div className="py-6">
                    <ul className="flex flex-col gap-1">
                        <li>
                            <NavLink path="/">
                                <Home className="w-4 h-4" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink path="/about">
                                <User className="w-4 h-4" /> About
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
                            <NavLink path="/writing">
                                <PenLine className="w-4 h-4" /> Writing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink path="/toolkit">
                                <Frame className="w-4 h-4" /> Toolkit
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2">
                <a href="https://twitter.com/mavdotso" target="_blank">
                    <Button variant="outline" size="icon">
                        <Twitter className="w-4 h-4" />
                    </Button>
                </a>
                <a href="https://github.com/mavdotso" target="_blank">
                    <Button variant="outline" size="icon">
                        <Github className="w-4 h-4" />
                    </Button>
                </a>
                <a href="https://www.instagram.com/vdenisov_/" target="_blank">
                    <Button variant="outline" size="icon">
                        <Instagram className="w-4 h-4" />
                    </Button>
                </a>
            </div>
        </menu>
    );
}
