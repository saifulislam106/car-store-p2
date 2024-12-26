import { Router } from 'express';
import { OrderControllers } from './order.controller';

export const router = Router();

router.get('/revenue', OrderControllers.calculateRevenueController);
router.post('/', OrderControllers.createOrderController);
router.get('/', OrderControllers.getAllOrdersController);
