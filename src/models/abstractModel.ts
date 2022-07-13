import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (payload: T): Promise<T> => this.model.create({ ...payload });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  update = async (id: string, payload: T): Promise<T | null> =>
    this.model
      .findOneAndUpdate({ _id: id }, payload, { returnOriginal: false });

  delete = async (id: string): Promise<T | null> =>
    this.model.findOneAndDelete({ _id: id });
}

export default MongoModel;