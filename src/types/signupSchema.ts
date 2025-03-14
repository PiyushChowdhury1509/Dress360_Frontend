import { z } from "zod";

export const SignupSchema = z.object({
    firstName: z
    .string()
    .trim()
    .min(1,"First Name can't be empty"),

    lastName: z
    .string()
    .trim()
    .min(1,"dont write such a last name"),

    email: z
    .string()
    .email("enter a valid email address"),

    password: z
    .string()
    .min(6,"password should be atleast 6 character long")
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;