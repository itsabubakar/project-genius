export default function AuthLayout({children}) {
    return (
        
        <div className="px-5 pt-8 pb-28 flex flex-col gap-8
            
            sm:justify-center sm:items-center h-[100vh] bg-custom"
        >
            {children}
        </div>
    )
}