import { PageDescription } from '@/components/pages/PageDescription';
import { PageTitle } from '@/components/pages/PageTitle';
import { PageWrapper } from '@/components/pages/PageWrapper';
import TextCard from '@/components/writing/TextCard';

export default function Writing() {
    const posts = [
        {
            title: 'Creators economy in crypto',
            description: 'Since mid 2020, I’ve focused my energy on Compound.',
            year: '2023',
            link: '/',
        },
        {
            title: 'Im building a SaaS and I dont know what Im doing',
            description: '',
            year: '2023',
            link: '/',
        },
        {
            title: 'Ethereum vs Tezos',
            description: '',
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
