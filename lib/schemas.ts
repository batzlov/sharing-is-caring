import * as z from "zod";

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Bitte gib eine gültige E-Mail-Adresse ein"
    }),
    password: z
        .string()
        .min(8, {
            message: "Das Passwort muss mindestens 8 Zeichen lang sein"
        })
        .max(64, {
            message: "Das Passwort darf maximal 64 Zeichen lang sein"
        })
});

export const SignUpSchema = z.object({
    firstName: z
        .string()
        .min(2, {
            message: "Dein Vorname muss mindestens 2 Zeichen lang sein"
        })
        .max(64, {
            message: "Dein Vorname darf maximal 64 Zeichen lang sein"
        }),
    lastName: z
        .string()
        .min(2, {
            message: "Dein Nachname muss mindestens 2 Zeichen lang sein"
        })
        .max(64, {
            message: "Dein Nachname darf maximal 64 Zeichen lang sein"
        }),
    email: z.string().email({
        message: "Bitte gib eine gültige E-Mail-Adresse ein"
    }),
    password: z
        .string()
        .min(8, {
            message: "Das Passwort muss mindestens 8 Zeichen lang sein"
        })
        .max(64, {
            message: "Das Passwort darf maximal 64 Zeichen lang sein"
        }),
    confirmPassword: z
        .string()
        .min(8, {
            message: "Das Passwort muss mindestens 8 Zeichen lang sein"
        })
        .max(64, {
            message: "Das Passwort darf maximal 64 Zeichen lang sein"
        })
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
