
import { Car } from '../car/car.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder) : Promise <IOrder> => {
  const { car, quantity } = payload;

  const carDetails = await Car.findById(car);
  if (!carDetails) {
    throw new Error('Car not found');
  }
  const totalPrice = carDetails.price * (quantity || 1);

  const order = await Order .create({...payload ,totalPrice})

  return order;
};

export const orderService ={
    createOrder
}

