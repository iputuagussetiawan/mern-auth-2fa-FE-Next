import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Header from "./_components/Header";
import Asidebar from "./_components/Asidebar";
import { AuthProvider } from "@/context/auth-provider";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthProvider>
            <SidebarProvider>
                <Asidebar />
                <SidebarInset>
                    <main className="w-full">
                        <Header />
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </AuthProvider>
    );
}