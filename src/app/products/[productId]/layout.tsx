function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const random = getRandomInt(2);
    if (random === 1){
        throw new Error("Error loading product");
    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>Product Details</h1>
                <p>Product content</p>  
            {children}
            {/* <h2>Featured Products</h2> */}
            </main>
        </div>
    );
}
