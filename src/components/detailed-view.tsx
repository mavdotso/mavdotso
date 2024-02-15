import { cn } from '@/lib/utils';

export default function DetailedView({ className }: { className: any }) {
    return (
        <aside className={cn(className, `overflow-hidden flex-none grid w-80 p-2 pt-4 content-between border-l`)}>
            <div className="flex items-center gap-4">
                <p className="text-sm font-bold pl-3.5">Content</p>
            </div>
        </aside>
    );
}
