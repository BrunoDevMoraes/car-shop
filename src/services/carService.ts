import { CarSchema, Car } from '../interfaces/CarInterface';
import Service, { ServiceError } from './abstractService';
import CarModel from '../models/carModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default CarService;