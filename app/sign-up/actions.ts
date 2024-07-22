"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { SignUpSchema, SignUpSchemaType } from "@/lib/schemas";

export async function signUp(signUpSchema: SignUpSchemaType) {
    const supabase = createClient();

    const user = {
        email: signUpSchema.email,
        password: signUpSchema.password
    };

    const { error } = await supabase.auth.signUp(user);

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}
