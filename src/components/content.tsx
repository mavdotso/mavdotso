export default function Content({ children }: { children: React.ReactNode }) {
    return <main className="overflow-auto flex-grow bg-background border max-h-screen w-full rounded-md py-8 px-12 m-2">{children}</main>;
}
