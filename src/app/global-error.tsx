"use client";

export default function GlobalError() {
    return(
        <html>
            <body>
                <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                        <h1 className="text-2xl font-bold">Global Error</h1>
                        <p>Something went wrong</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Refresh
                        </button>
                    </main>
                </div>
            </body>
        </html>
    );
}
