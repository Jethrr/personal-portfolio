import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({
    message: "Please enter a name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string({
    message: "Please enter a message",
  }),
});
