import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';

import CarModel from '../../../models/carModel';
import { cars } from '../../mocks/carMock';

describe('CarModel', () => {
  beforeEach(() => {
    sinon.stub(Model, "create").resolves(cars);
  });
  afterEach(() => {
    (Model.create as SinonStub).restore();
  })
  it('should create a car', async () => {
    const carModel = new CarModel();
    const createdCar = await carModel.create(cars);
    expect(createdCar).to.be.deep.equal(cars)
  })
})

