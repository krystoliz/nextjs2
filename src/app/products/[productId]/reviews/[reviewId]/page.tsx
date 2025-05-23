import { notFound } from 'next/navigation';

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ReviewDetail({
    params,
}:{
    params:Promise<{productId: string, reviewId: string}>;
}) {
    const random = getRandomInt(2);
    if (random === 1){
        throw new Error("Error loading review");
    }
    const {productId, reviewId} = await params;
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>Review {reviewId} for Product {productId}</h1>
                <p>Review content</p>
            </main>
        </div>
    );

}