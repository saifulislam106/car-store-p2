import mongoose from 'mongoose';
import { Car } from '../car/car.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: IOrder) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const car = await Car.findById(orderData.car).session(session);
    if (!car){
      throw new Error('Car is not found')
    };

    if (car.quantity < orderData.quantity) {
      throw new Error('Not available');
    }

    car.quantity -= orderData.quantity;
    car.inStock = car.quantity > 0;
    await car.save({ session });

    const order = await Order.create([orderData], { session });

    await session.commitTransaction();
    return order;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

const getAllOrders = async () => await Order.find().populate('car');

const calculateRevenue = async () => {
  const orders = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);
  return orders[0]?.totalRevenue || 0;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  calculateRevenue,
};
