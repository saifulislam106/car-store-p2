import { Request, Response } from 'express';
import { carServices } from './car.service';
import { error } from 'console';

const creatCar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await carServices.createCar(payload);
    res.send({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.json({
      message: 'Something went wrong',
      success: false,
      err,
    });
  }
};

const getCar = async (req: Request, res: Response) => {
  try {
    const result = await carServices.getAllCar();
    res.send({
      message: 'Car retrieved successfully',
      success: true,
      data: result
    });
  } catch (err) {
    console.log(error , err);
    res.status(500).json({
      message: 'An unexpected error occurred',
      success: false,
      err,
    });
  }
};

export const carController = {
    creatCar,
    getCar
}
