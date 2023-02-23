const express=require("express");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));


const history=[{"userId":"0",
    "accessTime":"1:24 PM"
},{"userId":"1","accessTime":"5:33 AM"},{"userId":"2","accessTime":"2:02 PM"}]

//get all users
app.get("/userHistory",(req,res)=>{
    console.log("sdfs")
    res.status(201).json({msg:history})
})

//specific user
app.get("/userHistory/:id",(req,res)=>{
    id=req.params.id
    console.log("sdfs")
    res.status(201).json({msg:history[id]})
})

app.listen("3000",()=>{
    console.log("server listening on port 3000");
})

