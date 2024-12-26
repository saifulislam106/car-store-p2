/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderServices } from './order.service';

import { Request, Response } from "express";


 const createOrderController = async (req: Request, res: Response) => {
  try {
      const order = await OrderServices.createOrder(req.body);
      res.status(201).json({ message: 'Order created successfully', success: true, data: order });
  } catch (error:any) {
      res.status(400).json({ message: error.message, success: false });
  }
};

 const getAllOrdersController = async (req: Request, res: Response) => {
  try {
      const orders = await OrderServices.getAllOrders();
      res.status(200).json({ message: 'Orders retrieved successfully', success: true, data: orders });
  } catch (error:any) {
      res.status(400).json({ message: error.message, success: false });
  }
};

 const calculateRevenueController = async (req: Request, res: Response) => {
  try {
      const totalRevenue = await OrderServices.calculateRevenue();
      res.status(200).json({ message: 'Revenue calculated successfully', success: true, data: { totalRevenue } });
  } catch (error:any) {
      res.status(400).json({ message: error.message, success: false });
  }
};

export const OrderControllers ={
  createOrderController,
  getAllOrdersController,calculateRevenueController
}