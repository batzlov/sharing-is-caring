import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Melde dich jetzt an</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Füge deine persönlichen Daten hinzu und schon kann's los
                    gehen
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Passwort</Label>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Erika" required />
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8">
                        <Label htmlFor="street">Straße</Label>
                        <Input
                            id="street"
                            placeholder="Magdeburger Allee"
                            required
                        />
                    </div>
                    <div className="col-span-4">
                        <Label htmlFor="number">Hausnummer</Label>
                        <Input id="number" placeholder="21" required />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-4">
                        <Label htmlFor="zip">PLZ</Label>
                        <Input id="zip" placeholder="02312" required />
                    </div>
                    <div className="col-span-8">
                        <Label htmlFor="city">Stadt</Label>
                        <Input id="city" placeholder="Leipzig" required />
                    </div>
                </div>
                <Button type="submit" className="w-full">
                    Registrieren
                </Button>
            </div>
            <div className="text-center text-sm">
                Du hast schon einen Account?{" "}
                <a
                    href="/auth/sign-in"
                    className="underline underline-offset-4"
                >
                    Login
                </a>
            </div>
        </form>
    );
}
