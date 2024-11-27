import express, { Request, Response } from "express";

const app = express();

// middleware
app.use(express.json())

app.get("/" , (req :Request , res :Response)=>{
    res.send(console.log("server is running on broswer"))
})

export default app;