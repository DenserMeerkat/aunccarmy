import { z } from "zod";

export type NavItem = {
  title: string;
  name: string;
  href: string;
  description?: string;
};

export type MainNavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

export type Slide = z.infer<typeof slideFormSchema>;

export type SlideWithId = Slide & { id: number };

export const slideFormSchema = z.object({
  public_id: z.string().min(1, "Public ID is required"),
  alt: z.string().optional(),
  caption: z
    .string()
    .max(30, "Caption must be less than 30 characters")
    .optional(),
});
