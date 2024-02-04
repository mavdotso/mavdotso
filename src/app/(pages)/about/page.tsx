import { PageDescription } from '@/components/pages/page-description';
import { PageTitle } from '@/components/pages/page-title';
import { PageWrapper } from '@/components/pages/page-wrapper';

export default function About() {
    return (
        <PageWrapper>
            <PageTitle>About</PageTitle>
            <PageDescription>
                I&#39;m Mav aka Vlad. I&#39;m a generalist with many interests. Hyper-interested in generative art, technology, and travel. I like making stuff people may find valuable and sometimes
                write about it. Based <s>in Bali</s> somewhere in Europe.
            </PageDescription>
        </PageWrapper>
    );
}
