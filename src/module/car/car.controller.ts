import { Request, Response } from 'express';
import { carServices } from './car.service';

const creatCar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    // console.log(payload);
    const result = await carServices.createCar(payload);
    res.send({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};

const getCar = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    const result = await carServices.getAllCar(searchTerm);
    res.send({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    // console.log(error , error);
    res.status(500).json({
      message: 'An unexpected error occurred',
      success: false,
      error,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.getSingleCar(carId);
    res.send({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const body = req.body;
    const result = await carServices.updateCar(carId, body);
    res.send({
      message: 'Car updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    const result = await carServices.deleteCar(carId);
    res.send({
      message: 'Car deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};

export const carController = {
  creatCar,
  getCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
