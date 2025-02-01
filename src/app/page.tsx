import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            <BackgroundGradientAnimation />
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center z-10">
                <Badge className="mb-4" variant="secondary">
                    <Rocket className="mr-2" /> {}
                    Everything for Everyone
                </Badge>

                <h1 className="text-4xl font-bold mb-8">Sharing is Caring</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <Button>Join now</Button>
                    <Button>Signup</Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
