import express from "express";
import cors from "cors";

const server = express();
server.use(cors())
server.use(express.json())

server.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).json({});
})

server.get("/",(req,res)=>{
    console.log("request recieved")
    res.status(200).json({});
})

server.listen(3000,()=>{
    console.log("server is running")
})