import "reflect-metadata"; // typeorm aula2
import express from "express";

import "./database";
import { router } from "./routes";

const app = express();

// app.get("/", (request, response) =>{
//     return response.send("Hello Word API")
//     // return response.json({message:"Hello Word API"})
// })

app.use(express.json());
app.use(router);


app.listen(3334, () => console.log("Server is running!"));
