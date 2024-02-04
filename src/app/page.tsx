import { PageDescription } from '@/components/pages/page-description';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-6xl text-primary font-heading">Primary h1</h1>
                <PageDescription>I like making stuff people may find valuable and sometimes write about it</PageDescription>
            </div>
            <div className="flex gap-4 pt-14">
                <Button>Primary</Button>
                <Button variant={'secondary'}>Secondary</Button>
                <Button variant={'outline'}>Outline</Button>
                <Button variant={'ghost'}>Ghost</Button>
            </div>
        </>
    );
}
