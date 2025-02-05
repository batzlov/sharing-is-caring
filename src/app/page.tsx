import { Rocket } from "lucide-react";
import Link from "next/link";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

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
                    <Link href="/auth/sign-up">
                        <Button>Join now</Button>
                    </Link>
                    <Link href="/auth/sign-in">
                        <Button>Login</Button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
