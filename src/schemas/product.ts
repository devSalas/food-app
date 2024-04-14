import z from "zod";

const productSchema = z.object({
  name: z.string(),
  brand: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().min(0).max(100).default(0),
  images: z.array(z.string()),
  category: z.string(),
  sizes: z.array(z.number()),
  colors: z.array(z.string()),
  gender: z.string(),
  isNewArrival: z.boolean().default(false),
  isBestSeller: z.boolean().default(false),
});

export type Shoe = z.infer<typeof productSchema>;

export const validateShoe = (object: any) => {
  return productSchema.safeParse(object);
};

export const validateShoePartial = (object: any) => {
  const shoeSchemaPartial = productSchema.partial();
  return shoeSchemaPartial.safeParse(object);
};
