import { Router } from "express";
import { carController } from "./car.controller";


const carRouter = Router()

carRouter.get("/:carId" , carController.getSingleCar);
carRouter.put("/:carId" , carController.updateCar);
carRouter.delete("/:carId" , carController.deleteCar);
carRouter.post("/" , carController.creatCar);
carRouter.get("/" , carController.getCar);

export default carRouter;