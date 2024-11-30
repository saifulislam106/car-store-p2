import { Router } from "express";
import { orderController } from "./order.controller";


export const orderRoutes = Router()

orderRoutes.post("/" , orderController.creatOrder);