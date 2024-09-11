"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function login(formData: FormData) {
  // const supabase = createClient()
  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }
  // const { error } = await supabase.auth.signInWithPassword(data)
  // if (error) {
  //   redirect('/error')
  // }
  // revalidatePath('/', 'layout')
  // redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = createClientComponentClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone,
      },
    },
  });

  if (error) {
    console.error("Error during sign up:", error);
    return { error: error.message };
  }

  // Insert additional user data into the users table
  const { error: insertError } = await supabase
    .from("users")
    .insert({ id: data.user?.id, name, phone });

  if (insertError) {
    console.error("Error inserting user data:", insertError);
    return { error: insertError.message };
  }

  revalidatePath("/");
  return { success: true };
}
