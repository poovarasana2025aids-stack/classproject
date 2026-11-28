import z from "zod";

export const registerschema=z.object({
    name: z.string().min(3,"Name must contain 3 letter"),
    email: z.string().email("enter a valid email"),
    password: z.string().min(8,"password should be minimum of 8 characters "),
    age: z.coerce.number().min(18,"age should br minimum of 18")

})