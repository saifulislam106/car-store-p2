import { Router } from "express";
import { carController } from "./car.controller";


const carRouter = Router()

carRouter.post("/" , carController.creatCar)
carRouter.get("/" , carController.getCar)

export default carRouter;