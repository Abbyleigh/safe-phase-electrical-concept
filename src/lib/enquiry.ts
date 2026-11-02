import { z } from "zod";
import { categoryIds } from "./site";

const ukPhone = /^(?:\+44\s?|0)(?:\d\s?){9,10}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone number is too long" })
    .refine((v) => v === "" || ukPhone.test(v), { message: "Enter a valid UK phone number" }),
  postcode: z
    .string()
    .trim()
    .max(10, { message: "Postcode is too long" })
    .refine((v) => v === "" || /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/.test(v), {
      message: "Enter a valid UK postcode",
    }),
  service: z.enum(categoryIds as [string, ...string[]], {
    errorMap: () => ({ message: "Choose the type of work" }),
  }),
  message: z
    .string()
    .trim()
    .min(20, { message: "Tell us a little more (at least 20 characters)" })
    .max(1000, { message: "Message must be under 1000 characters" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you understand this is a demo" }),
  }),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
