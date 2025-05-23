"use client";
import {usePathname} from "next/navigation";

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[1];
    return (
        <div>
            <h1>Review {reviewId} for Product {productId} not found</h1>
        </div>
    );
}