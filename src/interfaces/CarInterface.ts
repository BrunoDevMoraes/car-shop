import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

const CarSchema = VehicleSchema.extend({
  doorsQty: z.number()
    .gte(2, { message: 'doorsQty must be greater than 2' })
    .lte(4, { message: 'doorsQty must be lesser than 4' }),
  seatsQty: z.number()
    .gte(2, { message: 'seatsQty must be greater than 2' })
    .lte(7, { message: 'seatsQty must be lesser than 7' }),
});

type Car = z.infer<typeof CarSchema>;

export { CarSchema, Car };