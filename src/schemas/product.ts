import z from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
  category_id: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export const validateProduct = (object: any) => {
  return productSchema.safeParse(object);
};

export const validateProductPartial = (object: any) => {
  return productSchema.partial().safeParse(object);
};
