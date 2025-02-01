import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            <BackgroundGradientAnimation />
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center z-10">
                <h1 className="text-4xl font-bold mb-8">Sharing is Caring</h1>
                <Button size="lg">Login / Register</Button>
            </main>
            <Footer />
        </div>
    );
}
