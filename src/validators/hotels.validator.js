import { z } from "zod";  // 61.2k (gzipped: 14.5k)

export const hotelSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  location: z.string().min(1),
  rating: z.number().optional(),
  ratingCount: z.number().optional(),
});

//NEW: Schema for ID parameter validation
export const hotelIdSchema = z.object({
  id: z.string()
    .min(1, "Hotel ID is required")
    .regex(/^\d+$/, "Hotel ID must be a valid number")
    .transform((val) => parseInt(val, 10))
});