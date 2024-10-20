import { response } from "express";
import express from "express";
import colors from "colors";

//rest object
const app = express();


app.get('/',(request,response) =>{
    response.send({message: "sfbjkf"})
});

const port = 8000;

app.listen(port,()=>{
    console.log(`server running ${port}`.bgCyan.white);
});
