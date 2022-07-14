import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import { cars } from '../../mocks/carMock';
import CarController from '../../../controllers/carController';
import CarService from '../../../services/carService';

describe('CarController', () => {
  const req = {} as Request;
  const res =  {} as Response;
  before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.body = cars;
  });
  it('should create a car', async () => {
    const carController = new CarController(new CarService());
    await carController.create(req, res);
    expect(res.status as sinon.SinonStub).to.be.true;
    expect(res.json as sinon.SinonStub).to.be.true;
  });
});