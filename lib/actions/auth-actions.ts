"use server"

import { auth } from "../auth"
import { headers } from "next/headers";

export const signUp = async (email: string , password: string, name: string) => {
  // Implement sign-up logic here, e.g., create user in database
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: '/'
    }
  })
  return result;
}

export const signIn = async (email:string , password:string) => {
  // Implement sign-in logic here, e.g., create user in database
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: '/',
    }
  })
  return result;
}

export const signOut= async () => {
  // Implement sign-out logic here, e.g., create user in database
  const result = await auth.api.signOut({headers: await headers()})
  return result;
}