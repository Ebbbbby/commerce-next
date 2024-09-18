"use server";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
//server Actions
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  //check if email has already been taken
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use" };
  }
  //create new user
   await db.user.create({
    data: { email, name, password: hashedPassword },
  });

  return { success: "Account Created Successfully!" };
};
