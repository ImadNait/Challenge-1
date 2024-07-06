const express = require("express");
const charRoute = require("./routes/char");
const connectToDB = require("./config/DB");



const app = express();
app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;


app.use("/character",charRoute);

app.get("/",(req,res)=>{
    res.status(200).send("Start operation with '/character'");
})

async function start(){
    try{
    await connectToDB(process.env.DB_HOST);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
    }
    catch{
        console.log(err);
    }
}
start();



