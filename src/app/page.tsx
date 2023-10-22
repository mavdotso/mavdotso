import { Button } from '@/components/ui/button';
import { PageTitle } from '@/components/pages/PageTitle';
import { PageDescription } from '@/components/pages/PageDescription';

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-6xl">Hi, I'm Mav</h1>
            <PageDescription>I like making stuff people may find valuable and sometimes write about it</PageDescription>
        </div>
    );
}
