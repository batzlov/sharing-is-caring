import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Gib deine E-Mail und dein Passwort ein um dich anzumelden
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mail@sharing-is-caring.com"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </div>
            <div className="text-right text-xs mt-[-1rem] text-muted-foreground">
                <a href="#" className="underline-offset-4">
                    Passwort vergessen?
                </a>
            </div>
            <div className="text-center text-sm">
                Du hast noch keinen Account?{" "}
                <a
                    href="/auth/sign-up"
                    className="underline underline-offset-4"
                >
                    Registrierung
                </a>
            </div>
        </form>
    );
}
