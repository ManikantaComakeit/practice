import express from "express";
import cors from "cors";

const server = express();
server.use(cors())
server.use(express.json());


const users = [

    {
        name:"shivasai",
        age:10
    },
    {
        name:"manikanta",
        age:20
    }
];


server.get("/users",(req,res)=>{
    console.log("Get the users");
    res.status(200).json(users);
});

server.post("/users",(req,res)=>{
    console.log("Post to users");
    users.push(req.body);
    res.status(200).json(users);
})

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