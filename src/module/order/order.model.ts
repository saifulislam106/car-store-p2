
import { model, Schema} from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true, match: /.+@.+\..+/ },
  car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true, min: 0 },
}, { timestamps: true });

export const Order = model<IOrder>('Order', orderSchema);
