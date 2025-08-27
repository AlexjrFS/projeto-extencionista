import { z } from "zod";

export default interface Usuario{
    user:string;
    password:string;
}
export const UserSchema= z.object({
    user: z.string(),
    password: z.string()
})