import z from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  category_id: z.number(),
  description: z.string(),
  ingredients: z.string()
});

export type Product = z.infer<typeof productSchema>;

export const validateProduct = (object: any) => {
  return productSchema.safeParse(object);
};

export const validateProductPartial = (object: any) => {
  return productSchema.partial().safeParse(object);
};
