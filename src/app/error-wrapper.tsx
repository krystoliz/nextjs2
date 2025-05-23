"use client";

import { useState } from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occured",
}: {
    message?: string;
}) => {
    const [error, setError] = useState(false);
    
    if (error) throw new Error(message);
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Error Simulator</h2>
            <button title="Simulate an Error"
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => setError(true)}
            >
                Simulate Error
            </button>
        </div>
    );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div>
                    <ErrorSimulator message="Simulaterd Error in root layout" />
                </div>
                {children}
                <ErrorSimulator />
            </main>
        </div>
    );
};
