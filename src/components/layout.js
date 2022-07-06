export default function Layout({ children, isScrollable }) {
    return (
        <>
            <main>
                <div className={`mx-auto bg-neutral-900 min-h-screen min-w-screen flex flex-col font-Montserrat ${isScrollable ? "overflow-y-auto" : ""}`}>
                    {children}
                </div>
            </main>
        </>
    )
}