"use client"

export default function ErrorBoundary({
    error,
    reset,
}:{
    error: Error
    reset: () => void
}){

    return (
        <div> 
            <p>Error in reviewId {error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}