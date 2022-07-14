import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';

import CarService from '../../../services/carService';
import { cars } from '../../mocks/carMock';

describe('CarService', () => {
  beforeEach(() => {
    sinon.stub(Model, "create").resolves(cars);
  });
  afterEach(() => {
    (Model.create as SinonStub).restore();
  })
  it('should create a car', async () => {
    const carService = new CarService();
    const createdCar = await carService.create(cars);
    expect(createdCar).to.be.deep.equal(cars)
  })
})