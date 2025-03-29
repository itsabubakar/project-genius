import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function MainWrapper({children}) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        
        <main className="flex flex-col items-center gap-[64px] sm:gap-[96px] md:gap-[112px] lg:gap-[120px]">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider></main>
    )
}