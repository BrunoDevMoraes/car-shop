import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import abstractModel from './abstractModel';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  buyValue: String,
  status: Boolean,
  color: String,
  year: Number,
  model: String,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends abstractModel<Car> {
  constructor(model = createModel('cars', carSchema)) {
    super(model);
  }
}

export default CarModel;