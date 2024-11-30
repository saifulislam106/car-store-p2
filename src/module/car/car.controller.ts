import { Request, Response } from 'express';
import { carServices } from './car.service';



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
    // console.log(error , err);
    res.status(500).json({
      message: 'An unexpected error occurred',
      success: false,
      error:err
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const result = await carServices.getSingleCar(carId);
    res.send({
      message: 'Car retrieved successfully',
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

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const body = req.body;
    const result = await carServices.updateCar(carId , body);
    res.send({
      message: 'Car updated successfully',
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

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
   
    const result = await carServices.deleteCar(carId);
    res.send({
      message: 'Car deleted successfully',
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

export const carController = {
    creatCar,
    getCar,
    getSingleCar,
    updateCar,
    deleteCar
}
