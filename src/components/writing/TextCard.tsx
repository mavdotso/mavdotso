import Link from 'next/link';
import AnimatedText from '../ui/animated-text';

interface TextCardProps {
    index: number;
    title: string;
    description?: string;
    year: string;
    link: string;
}

export default function TextCard({ title, description, year, index, link = '/' }: TextCardProps) {
    return (
        <Link href={link} className="rounded-lg overflow-hidden flex items-center justify-between gap-2 py-4 -mx-3 px-2 hover:bg-muted">
            <div className="flex gap-2">
                <div className="font-medium text-sm flex-shrink-0">
                    <AnimatedText delay={index * 100} text={title} />
                </div>
                <p className="text-sm max-lg:hidden text-secondary-font truncate">
                    <AnimatedText delay={index * 400} text={description} />
                </p>
            </div>
            <span className="flex flex-grow border-b px-2"></span>
            <div className="text-gray-500 text-sm">
                <AnimatedText delay={index * 800} text={year} />
            </div>
        </Link>
    );
}
