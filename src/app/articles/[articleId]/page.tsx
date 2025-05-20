import Link from "next/link";


export default async function Articles({ 
    params, 
    searchParams }: {        
        params: Promise<{ articleId: string }>; 
        searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
     }) {
        const articleId = (await params).articleId;
        const {lang = "en"}  = await searchParams;
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1>News article {articleId}</h1>
            <p>Reading in language {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </main>
        </div>
    )
}