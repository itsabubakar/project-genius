import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function AuthLayout({children}) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <div className="px-5 pt-8 pb-28 flex flex-col gap-8
                sm:justify-center sm:items-center min-h-[100vh] bg-custom"
            >
                {children}
            </div>
        </QueryClientProvider>
    )
}