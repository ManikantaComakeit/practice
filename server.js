

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
});


app.post("/sendemail",(req,res)=>{
    res.status(200).json({mssg:"email sent"});
})

app.listen("3000",()=>{
    console.log("server listening on port 3000");
})

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

let productList = ["iqoo","oneplus"];

server.post("/",(req,res)=>{
    const productName = req.body.name;
  productList.push(productName);
  res.status(201).send({ message: 'Product added successfully!' });
})

server.get("/",(req,res)=>{
    console.log("request recieved")
    res.status(200).send(productList);
})

server.listen(4000,()=>{
    console.log("server is running")
});

