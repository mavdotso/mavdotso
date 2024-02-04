import { PageDescription } from '@/components/pages/page-description';
import { PageTitle } from '@/components/pages/page-title';
import { PageWrapper } from '@/components/pages/page-wrapper';
import TextCard from '@/components/writing/text-card';

export default function Writing() {
    const posts = [
        {
            title: 'Creators economy in crypto',
            description: '',
            year: '2022',
            link: '/',
        },
        {
            title: 'Ethereum vs Tezos',
            description: 'Understanding the "Ethereum vs. Tezos" discussions',
            year: '2023',
            link: '/',
        },
    ];
    return (
        <PageWrapper>
            <PageTitle>Writing</PageTitle>
            <PageDescription>I write only when I absolutely have to so you don&#39;t have to read another blog</PageDescription>
            {posts.map((post, index) => (
                <TextCard key={index} index={index} title={post.title} description={post.description} year={post.year} link={post.link} />
            ))}
        </PageWrapper>
    );
}
