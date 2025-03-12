import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import ContentNav from "../components/ContentNav";
import Search from "../components/Search";


export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div >
            <Navbar title={"Next.js / TypeScript Movies"}/>
            <main className="min-h-[calc(100vh-96px)] bg-gradient-to-br from-gray-50 to-blue-100 ">
                <ContentNav />
               <div className="flex justify-center">
               <Search/>
               </div>
                <div className="container mx-auto max-w-7xl h-full p-8"> 
                    {children}
                </div>
            </main>
        </div>
    );
}
