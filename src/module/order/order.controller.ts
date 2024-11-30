import { orderService } from "./order.service";
import { Request, Response } from "express";

const creatOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.createOrder(payload);
    res.status(201).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {
    res.status(404).json({
      message: err.message ||'Something went wrong',
      success: false,
     
    });
  }
};

export const orderController = {
  creatOrder,
};
