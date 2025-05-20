"use client"
import { useRouter } from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order...");
        router.replace("/");
    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>Order Product</h1>
                <p>Order your product here!</p>
                <button onClick={handleClick}>Place Order</button>
            </main>
        </div>
    )
}