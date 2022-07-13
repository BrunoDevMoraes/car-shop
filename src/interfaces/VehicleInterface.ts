import { z } from 'zod';

const VehicleSchema = z.object({
  buyValue: z.number().int(),
  status: z.boolean().optional(),
  color: z.string()
    .min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number()
    .gte(1900, { message: 'Year must be greater than 1900' })
    .lte(2022, { message: 'Year must be lesser than 2022' }),
  model: z.string()
    .min(3, { message: 'Model must be 3 or more characters long' }),
});

type Vehicle = z.infer<typeof VehicleSchema>;

export { VehicleSchema, Vehicle };