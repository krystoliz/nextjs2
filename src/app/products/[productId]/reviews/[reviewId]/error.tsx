"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
    error,
    reset,
}:{
    error: Error
    reset: () => void;
}){
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <p>Error in reviewId {error.message}</p>
                <button onClick={() => reload()} className="
                    px-4 py-2 bg-blue-500 text-white font-semibold
                    rounded-md shadow-sm hover:bg-blue-600 focus:outline-none
                    focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                    cursor-pointer transform active:scale-95 transition-transform duration-100
                    ">Try again</button>
            </main>
        </div>
    )
}