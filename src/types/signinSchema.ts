import { z } from "zod";

export const signinSchema = z.object({
    email: z
    .string()
    .email(),

    password: z
    .string()
    .min(6,"password must be atleast 6 characters wrong")
});

export type signinSchemaType = z.infer<typeof signinSchema>;