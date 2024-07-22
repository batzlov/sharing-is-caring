"use client";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "./actions";

import {
    Button,
    Input,
    Label,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui";
import AuthLayout from "@/components/layout/auth-layout";

import { SignUpSchema, SignUpSchemaType } from "@/lib/schemas";

interface SignUpProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignIn({ className, ...props }: SignUpProps) {
    const form = useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@email.com",
            password: "password",
            confirmPassword: "password"
        }
    });

    async function onSubmit(values: SignUpSchemaType) {
        console.log("Form submitted");
        console.log(values);
    }

    return (
        <AuthLayout>
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Registrieren</h1>
                <p className="text-balance text-muted-foreground">
                    Bitte vervollständige deine Daten um fortzufahren
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(signUp)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Vorname</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Vorname"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nachname</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nachname"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-Mail</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E-Mail"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Passwort</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="********"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Passwort wiederholen
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="********"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Auf die Plätze, fertig, los!
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Du hast schon einen Account?{" "}
                        <Link href="/sign-in" className="underline">
                            Jetzt einloggen
                        </Link>
                    </div>
                </form>
            </Form>
        </AuthLayout>
    );
}
