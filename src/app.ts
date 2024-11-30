import express, { Request, Response } from "express";
import carRouter from "./module/car/car.router";
import { orderRoutes } from "./module/order/order.router";


const app = express();

// middleware
app.use(express.json())


// car api 
app.use("/api/cars" , carRouter)

// order api 

app.use("/api/orders" , orderRoutes)

app.get("/" , (req :Request , res :Response)=>{
    res.send({
        message: "server is running on broswer"
    })
})

export default app;