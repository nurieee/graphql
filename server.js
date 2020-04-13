import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";



import dotenv from "dotenv";
dotenv.config();

const app expres = require('expres');

const app = express();
const port = 3000;


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected");
}).catch(error => console.log(error));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        graphiql: true
    })
)

app.listen(PORT, ()=> {
    console.log(`Server running at: ${PORT}`)
}) 