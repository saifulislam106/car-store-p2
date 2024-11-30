"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_router_1 = __importDefault(require("./module/car/car.router"));
const order_router_1 = require("./module/order/order.router");
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// car api 
app.use("/api/cars", car_router_1.default);
// order api 
app.use("/api/orders", order_router_1.orderRoutes);
app.get("/", (req, res) => {
    res.send({
        message: "server is running on broswer"
    });
});
exports.default = app;
