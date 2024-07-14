import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layout/auth-layout";

interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignIn({ className, ...props }: SignInProps) {
    return (
        <AuthLayout>
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Einloggen</h1>
                <p className="text-balance text-muted-foreground">
                    Bitte vervollständige deine Credentials um fortzufahren
                </p>
            </div>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="maxi-muster@email.com"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Passwort</Label>
                        <Link
                            href="/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Passwort vergessen?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        required
                    />
                </div>
                <Button type="submit" className="w-full">
                    Einloggen
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                Du hast noch keinen Account?{" "}
                <Link href="/sign-up" className="underline">
                    Jetzt registieren
                </Link>
            </div>
        </AuthLayout>
    );
}
