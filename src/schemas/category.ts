import z from "zod";

const categorySchema = z.object({
  name: z.string(),
  image: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const validateCategory = (object: any) => {
  return categorySchema.safeParse(object);
};

export const validateCategoryPartial = (object: any) => {
  return categorySchema.partial().safeParse(object);
};
